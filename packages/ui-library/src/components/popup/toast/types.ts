import type {BaseProps} from '../../common/types';
import type {ReactNode} from 'react';

export type ToastProps = BaseProps & {
  alignment?: {vertical: 'top' | 'center' | 'bottom', horizontal: 'left' | 'center' | 'right'};
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  timeout: number;
}