import type {BaseProps, Status} from '../../common/types';
import type {ReactNode} from 'react';

export type ToastProps = BaseProps & {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  timeout: number;
  type: 'info' | Status;
  verticalAlign: 'top' | 'bottom';
  horizontalAlign: 'left' | 'center' | 'right';
}

// TODO use object {vertical: string, horizontal: string} instead of individual props