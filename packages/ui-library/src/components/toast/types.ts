import type {BaseProps, Status} from '../common/types';
import type {ReactNode, RefObject} from 'react';

export const fadeDuration = 500;

export type ToasterProps = BaseProps & {
  children: ReactNode;
  alignment?: {vertical: 'top' | 'center' | 'bottom', horizontal: 'left' | 'center' | 'right'};
  dismissible?: boolean;
  limit?: number;
  timeout?: number | 'persistent';
}

export type ToasterContext = {
  queueToast: (message: string, options?: ToastOptions) => string;
  closeToast: (id?: string) => void;
}

export type ToastOptions = BaseProps & {
  action?: ReactNode;
  closeCallback?: () => void;
  dismissible?: boolean;
  timeout?: number | 'persistent';
  variant?: Status;
}

export type ToastProps = BaseProps & {
  closeCallback: () => void;
  id: string;
  message: string;
  timeout: number | 'persistent';
  action?: ReactNode;
  dismissible?: boolean;
  variant?: Status | undefined;
}

export type ToastRef = {
  close: () => void;
}

export type InternalToast = {
  id: string;
  props: ToastProps;
  ref: RefObject<ToastRef | null>;
};