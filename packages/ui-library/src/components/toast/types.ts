import type {BaseProps, Status} from '../common/types';
import type {ReactElement, ReactNode} from 'react';
import {Toast} from './toast';

export type ToasterProps = {
  children: ReactNode;
  alignment?: {vertical: 'top' | 'center' | 'bottom', horizontal: 'left' | 'center' | 'right'};
  dark?: boolean;
  dismissible?: boolean;
  limit?: number;
  timeout?: number | 'persistent';
}

export type ToasterContext = {
  queueToast: (message: string, options?: ToastOptions) => string;
  closeToast: (id?: string) => void;
}

export type ToastOptions = {
  action?: ReactNode;
  closeCallback?: () => void;
  dark?: boolean;
  dismissible?: boolean;
  timeout?: number | 'persistent';
  variant?: 'info' | Status;
}

export type ToastProps = BaseProps & {
  closeCallback: () => void;
  id: string;
  message: string;
  timeout: number | 'persistent';
  action?: ReactNode;
  dismissible?: boolean;
  variant?: 'info' | Status | undefined;
}

export type InternalToast = ReactElement<ToastProps, typeof Toast>;