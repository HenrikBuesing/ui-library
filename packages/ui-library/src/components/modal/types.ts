import type {BaseProps, Status} from '@common/types';
import type {ReactNode} from 'react';

export type ModalProps = BaseProps & AdditionalModalProps;

type AdditionalModalProps = {
  title: string;
  theme?: Status;
} & ({
  confirmAction: () => void;
  confirmLabel: string;
  message: string[];
  children?: never;
} & (Notification | Question) | CustomContent & ({
  confirmAction: () => void;
  timeout: number;
} | {
  confirmAction?: never;
  timeout?: never;
}));

type Notification = {
  variant: 'notification';
  cancelAction?: never;
  cancelLabel?: never;
  timeout?: number;
};

type Question = {
  variant: 'question';
  cancelAction: () => void;
  cancelLabel: string;
  timeout?: never;
};

type CustomContent = {
  children: ReactNode;
  cancelAction?: never;
  cancelLabel?: never;
  confirmLabel?: never;
  message?: never;
  variant?: never;
};