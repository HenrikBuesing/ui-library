import type {BaseComponentProps} from '@common/types';

export type InputProps = BaseComponentProps<'input'> & AdditionalInputProps;

type AdditionalInputProps = {
  label: string;
  iconSrc?: string;
  toggle?: () => void;
  rules: InputRule[];
  capsLockWarning?: string;
} & ({
  ttText: string;
  ttIcon: string;
  ttClose?: string;
} | {
  ttText?: never;
  ttIcon?: never;
  ttClose?: never;
});

export type InputRule = {
  label: string;
} & ({
  type: 'minLength' | 'maxLength' | 'letters' | 'numbers' | 'special' | 'upper';
  occurrence: number;
  regex?: never;
} | {
  type?: never;
  occurrence?: never;
  regex: string;
});