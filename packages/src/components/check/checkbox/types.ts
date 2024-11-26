import type {BaseProps, Label} from '@common/types';

export type CheckboxProps = BaseProps<'input'> & AdditionalCheckboxProps;

type AdditionalCheckboxProps = Label & {
  checked: boolean;
  toggleCheck: (value: boolean) => void;
  color?: string;
};