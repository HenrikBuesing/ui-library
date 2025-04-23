import type {ToastProps} from '../toast/types';
import type {ReactNode} from 'react';

export type PopupProviderProps = {
  children: ReactNode;
  alignment?: { vertical: 'top' | 'center' | 'bottom', horizontal: 'left' | 'center' | 'right' };
}

export type ProviderContext = {
  addPopup: (value: Omit<ToastProps, 'alignment'>[]) => void;
  popups: ToastProps[];
}