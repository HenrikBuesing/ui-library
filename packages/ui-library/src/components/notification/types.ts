import type {MouseEventHandler, ReactNode} from 'react';
import type {BaseProps, Status} from '../common/types';

export type NotificationProps = BaseProps & {
  children: ReactNode;
  type: 'info' | Status;
  variant: 'outlined' | 'filled';
} & ({
  action?: ReactNode;
  onCancel?: never;
} | {
  action?: never;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
})