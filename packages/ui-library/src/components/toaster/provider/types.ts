import type {ToastProps} from '../toast/types';
import type {ReactNode} from 'react';

export type ToastProviderProps = {
  children: ReactNode;
  alignment?: { vertical: 'top' | 'center' | 'bottom', horizontal: 'left' | 'center' | 'right' };
}

export type ToasterContext = {
  addToast: (value: Omit<ToastProps, 'alignment'>[]) => void;
  toasts: Omit<ToastProps, 'alignment'>[];
}