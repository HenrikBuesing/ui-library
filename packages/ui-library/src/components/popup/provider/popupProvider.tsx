import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import type {PopupProviderProps, ProviderContext} from './types';
import type {ToastProps} from '../toast/types';
import cls from '@utils/conditionalClass';
import styles from '../popup.module.scss';
import {Toast} from '../toast';

const initial: ProviderContext = {
  addPopup: () => {},
  popups: []
}

const PopupContext = createContext<ProviderContext>(initial);

export function PopupProvider(props: PopupProviderProps) {
  const [popups, setPopups] = useState<Omit<ToastProps, 'alignment'>[]>([]);

  const addPopup = useCallback((popup: ToastProps[]) => {
    setPopups(prev => [...prev, ...popup]);
  }, []);

  const contextValue = useMemo(() => ({
    popups,
    addPopup,
  }), [popups, addPopup]);

  const alignment = useMemo(() => {
    if (!props.alignment) return [styles.left, styles.bottom];

    const h = props.alignment.horizontal, v = props.alignment.vertical;

    return h === 'center' && v === 'center' ? [styles.centerXY] : [
      h === 'center' ? styles.centerX : styles[h],
      v === 'center' ? styles.centerY : styles[v]
    ];
  }, [props.alignment]);

  function removePopup(popup: ToastProps) {
    setPopups(prev => prev.filter(p => p.id !== popup.id));
    
    popup.onClose?.();
  }

  return (
    <PopupContext.Provider value={contextValue}>
      {props.children}

      <div className={cls([styles.position, styles.popupStack, ...alignment])}>
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
