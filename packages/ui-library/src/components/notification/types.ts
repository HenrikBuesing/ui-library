import type {MouseEventHandler, ReactNode} from 'react';
import type {BaseProps, Status} from '../common/types';

export type NotificationProps = BaseProps & {
  children: ReactNode;
  type: 'info' | Status;
  variant: 'outlined' | 'filled';
} & ({
  action?: ReactNode;
  onClose?: MouseEventHandler<HTMLButtonElement>;
} | {
  action?: never;
  onClose?: MouseEventHandler<HTMLButtonElement>;
})