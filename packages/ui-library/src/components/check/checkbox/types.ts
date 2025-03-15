import type {BaseComponentProps} from '@common/types';
import type {CSSProperties, ReactNode} from 'react';

export type CheckboxProps = BaseComponentProps<'input'> & AdditionalCheckboxProps;

type AdditionalCheckboxProps = {
  checked?: boolean;
  children?: ReactNode;
  color?: CSSProperties['backgroundColor'];
};