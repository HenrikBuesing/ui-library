import type {BaseProps, Status} from '../common/types';
import type {MouseEventHandler, ReactNode} from 'react';

export type NotificationProps = BaseProps & {
  children: ReactNode;
  type: 'info' | Status;
  variant: 'outlined' | 'filled';
  icon?: ReactNode;
} & ({
  action?: ReactNode;
  onCancel?: never;
} | {
  action?: never;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
})