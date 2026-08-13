import {fadeDuration, type InternalToast, type ToasterContext, type ToasterProps, type ToastOptions, type ToastProps, type ToastRef} from './types';
import React, {createContext, createRef, useContext, useRef, useState} from 'react';
import cls from '@utils/conditionalClass';
import styles from './toast.module.scss';
import generateKey from '@utils/getId';
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
    timeout = 5000,
  } = props;

  const [toasts, setToasts] = useState<InternalToast[]>([]);
  const pendingToasts = useRef<InternalToast[]>([]);

  function queueToast(message: string, opt?: ToastOptions) {
    const toast = createToast(message, opt);
    const total = toasts.length + pendingToasts.current.length;

    pendingToasts.current.push(toast);

    if (total >= limit) {
      for (let i = 0; i < (total - limit) + 1; i++) {
        closeToast(toasts[i].id);
      }

      setTimeout(() => {
        addToast(toast);
      }, fadeDuration);
    } else {
      addToast(toast);
    }

    return toast.id;
  }

  function addToast(toast: InternalToast) {
    setToasts(prev => {
      pendingToasts.current = pendingToasts.current.filter(t => t !== toast);
      return [...prev, toast];
    });
  }

  function createToast(message: string, opt?: ToastOptions): InternalToast {
    const id = generateKey();
    const ref = createRef<ToastRef>();

    const props: ToastProps = {
      action: opt?.action,
      closeCallback: () => {onToastClosed(id, opt?.closeCallback)},
      dark: opt?.dark ?? dark,
      dismissible: opt?.dismissible ?? dismissible,
      id,
      message,
      timeout: opt?.timeout ?? timeout,
      variant: opt?.variant,
    };

    return {id, props, ref};
  }

  function closeToast(id?: string) {
    // if no id is provided, close all toasts
    if (!id) return toasts.forEach(toast => {
      toast.ref.current?.close();
    });

    const toast = toasts.find(toast => toast.id === id);

    toast?.ref.current?.close();
  }

  function removeToast(id: string) {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }

  function onToastClosed(id: string, callback?: () => void) {
    removeToast(id);
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
          <Toast {...toast.props} ref={toast.ref} key={toast.id}/>
        )}
      </div>
    </ToasterContext.Provider>
  );
}

export function useToastContext() {
  return useContext(ToasterContext);
}