import type {AriaAttributes, ReactEventHandler, ReactNode} from 'react';
import type {BaseProps, Status} from '../common/types';

export type DialogProps = BaseProps & {
  open: boolean;
  children: ReactNode;
  ariaModal?: AriaAttributes['aria-modal'];
  describedby?: AriaAttributes['aria-describedby'];
  labelledby?: AriaAttributes['aria-labelledby'];
  scrollable?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClickBackdrop?: () => void;
} & ({
  onCancel: ReactEventHandler<HTMLDialogElement>;
  disableEscapeKey?: never;
} | {
  disableEscapeKey: boolean;
  onCancel?: never;
});

export type DialogTitleProps = {
  children: ReactNode;
  color?: Status | 'default';
  id?: string;
};

export type DialogContentProps = {
  children: ReactNode;
  divider?: boolean;
  id?: string;
};

export type DialogControlsProps = {
  children: ReactNode;
  position?: 'start' | 'end' | 'space-between';
}
