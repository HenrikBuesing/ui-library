import type {BaseComponentProps, Label} from '@common/types';

export type CheckboxProps = BaseComponentProps<'input'> & AdditionalCheckboxProps;

type AdditionalCheckboxProps = Label & {
  checked: boolean;
  toggleCheck: (value: boolean) => void;
  color?: string;
};