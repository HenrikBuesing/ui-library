import type {InternalToast, ToasterContext, ToasterProps, ToastOptions, ToastProps} from './types';
import React, {createContext, useContext, useRef, useState} from 'react';
import generateKey from '@utils/generateKey';
import cls from '@utils/conditionalClass';
import styles from './toast.module.scss';
import {Toast} from './toast';

const initial: ToasterContext = {
  queueToast: () => {throw new Error('You must wrap your component tree with <ToastProvider> in order to use the queueToast function.')},
  closeToast: () => {throw new Error('You must wrap your component tree with <ToastProvider> in order to use the closeToast function.')}
};

const ToasterContext = createContext<ToasterContext>(initial);

export function ToastProvider(props: ToasterProps) {
  const {
    alignment = {horizontal: 'left', vertical: 'bottom'},
    children,
    dark = false,
    dismissible = false,
    limit = 4,
    timeout = 5000
  } = props;

  const [toasts, setToasts] = useState<InternalToast[]>([]);
  const timeoutRef = useRef<Promise<void> | null>(null);
  const pendingToasts = useRef<InternalToast[]>([]);
  
  function queueToast(message: string, opt?: ToastOptions) {
    const {id, toast} = createToast(message, opt);
    const total = toasts.length + pendingToasts.current.length

    pendingToasts.current.push(toast);

    if (total >= limit) {
      closeToast(toasts[0].props.id);

      timeoutRef.current = new Promise<void>((resolve) => {
        setTimeout(() => {
          addToast(toast);
          resolve();
          timeoutRef.current = null;
        }, 500);
      });
    } else {
      addToast(toast);
    }
    
    return id;
  }
  
  function addToast(toast: InternalToast) {
    setToasts((prev) => {
      pendingToasts.current = pendingToasts.current.filter(t => t !== toast);
      return [...prev, toast];
    });
  }
  
  function createToast(message: string, opt?: ToastOptions) {
    const id = generateKey();
    const toastProps: ToastProps = {
      action: opt?.action,
      closeCallback: () => {onToastCloseCallback(id,  opt?.closeCallback)},
      dark: opt?.dark ?? dark,
      dismissible: opt?.dismissible ?? dismissible,
      id,
      message,
      timeout: opt?.timeout ?? timeout,
      variant: opt?.variant
    };

    return {id, toast: <Toast{...toastProps}/>};
  }

  function closeToast(id?: string) {
    if (!id) return setToasts([]);
    
    setToasts(prev => prev.filter(p => p.props.id !== id));
  }
  
  function onToastCloseCallback(id: string,  callback?: () => void) {
    closeToast(id);
    callback?.();
  }

  function setAlignment() {
    const h = alignment.horizontal, v = alignment.vertical;

    return h === 'center' && v === 'center' ? [styles.centerXY] : [
      h === 'center' ? styles.centerX : styles[h],
      v === 'center' ? styles.centerY : styles[v]
    ];
  }

  return (
    <ToasterContext.Provider value={{queueToast, closeToast}}>
      {children}
      
      <div className={cls([styles.toaster, setAlignment()])}>
        {toasts.map((toast) => 
          <Toast{...toast.props} key={toast.props.id}/>
        )}
      </div>
    </ToasterContext.Provider>
  );
}

export function useToastContext() {
  return useContext(ToasterContext);
}