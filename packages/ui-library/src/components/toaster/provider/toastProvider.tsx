import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import type {ToastProviderProps, ToasterContext} from './types';
import type {ToastProps} from '../toast/types';
import getAlignment from '../util/alignment';
import cls from '@utils/conditionalClass';
import styles from '../toast.module.scss';
import {Toast} from '../toast';

const initial: ToasterContext = {
  addToast: () => {},
  toasts: []
}

const ToasterContext = createContext<ToasterContext>(initial);

export function ToastProvider(props: ToastProviderProps) {
  const {
    children,
    alignment
  } = props;
  
  const [toasts, setToasts] = useState<Omit<ToastProps, 'alignment'>[]>([]);

  const addToast = useCallback((popup: Omit<ToastProps, 'alignment'>[]) => {
    setToasts(prev => [...prev, ...popup]);
  }, []);

  const contextValue = useMemo(() => ({
    toasts,
    addToast,
  }), [toasts, addToast]);

  function setAlignment() {
    if (!alignment) return [styles.left, styles.bottom];

    return getAlignment(alignment);
  }

  function removePopup(popup: ToastProps) {
    setToasts(prev => prev.filter(p => p.id !== popup.id));
    
    popup.closeCallback?.();
  }

  return (
    <ToasterContext.Provider value={contextValue}>
      {children}

      <div className={cls([styles.position, styles.toaster, setAlignment()])}>
        {toasts.map((toast) => (
          <Toast key={toast.id} closeCallback={() => {removePopup(toast)}} {...toast}>
            {toast.children}
          </Toast>
        ))}
      </div>
    </ToasterContext.Provider>
  );
}

export function useToastContext() {
  return useContext(ToasterContext);
}
