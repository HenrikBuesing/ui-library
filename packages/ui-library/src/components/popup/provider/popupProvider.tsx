import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import type {PopupProviderProps, ProviderContext} from './types';
import type {ToastProps} from '../toast/types';
import getAlignment from '../util/alignment';
import cls from '@utils/conditionalClass';
import styles from '../popup.module.scss';
import {Toast} from '../toast';

const initial: ProviderContext = {
  addPopup: () => {},
  popups: []
}

const PopupContext = createContext<ProviderContext>(initial);

export function PopupProvider(props: PopupProviderProps) {
  const {
    children,
    alignment
  } = props;
  
  const [popups, setPopups] = useState<Omit<ToastProps, 'alignment'>[]>([]);

  const addPopup = useCallback((popup: ToastProps[]) => {
    setPopups(prev => [...prev, ...popup]);
  }, []);

  const contextValue = useMemo(() => ({
    popups,
    addPopup,
  }), [popups, addPopup]);

  function setAlignment() {
    if (!alignment) return [styles.left, styles.bottom];

    return getAlignment(alignment);
  }

  function removePopup(popup: ToastProps) {
    setPopups(prev => prev.filter(p => p.id !== popup.id));
    
    popup.onClose?.();
  }

  return (
    <PopupContext.Provider value={contextValue}>
      {children}

      <div className={cls([styles.position, styles.popupStack, setAlignment()])}>
        {popups.map((popup) => (
          <Toast key={popup.id} onClose={() => {removePopup(popup)}} {...popup}>
            {popup.children}
          </Toast>
        ))}
      </div>
    </PopupContext.Provider>
  );
}

export function usePopupContext() {
  return useContext(PopupContext);
}
