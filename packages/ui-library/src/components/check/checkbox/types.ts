import type {BaseComponentProps} from '@common/types';
import type {ReactNode} from 'react';

export type CheckboxProps = Omit<BaseComponentProps<'input'>, 'onChange'> & AdditionalCheckboxProps;

type AdditionalCheckboxProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  color?: string;
  children?: ReactNode;
};