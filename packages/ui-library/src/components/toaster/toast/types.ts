import type {BaseProps} from '../../common/types';
import type {ReactNode} from 'react';

export type ToastProps = BaseProps & {
  children: ReactNode;
  id: string;
  open: boolean;
  timeout: number;
  action?: ReactNode;
  alignment?: {vertical: 'top' | 'center' | 'bottom', horizontal: 'left' | 'center' | 'right'};
  closeCallback?: (() => void) | undefined;
}