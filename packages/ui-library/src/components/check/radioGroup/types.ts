import type {ChangeEventHandler, CSSProperties, ReactNode} from 'react';
import type {BaseProps} from '../../common/types';

export type RadioGroupProps = BaseProps & {
  options: RadioOption[];
  color?: CSSProperties['backgroundColor'];
  direction?: 'row' | 'column';
  disabled?: boolean;
  name?: string
  onChange?: ChangeEventHandler<HTMLInputElement>;
  selected?: string;
};

export type RadioOption = {
  label: ReactNode;
  value: string | number;
  disabled?: boolean | undefined;
  id?: string | undefined;
  title?: string | undefined;
};