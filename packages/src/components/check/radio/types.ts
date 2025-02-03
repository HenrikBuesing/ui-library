import type {BaseComponentProps} from '@common/types';

export type RadioProps = BaseComponentProps<'input'> & AdditionalRadioProps;

type AdditionalRadioProps = {
  options: RadioOption[];
  selected: string;
  selectionChanged: (value: string) => void;
  color?: string;
};

export type RadioOption = {
  name: string;
  value: string;
  disabled?: boolean;
};