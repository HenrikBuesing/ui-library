import type {BaseProps} from "@common/types";

export type RadioProps = BaseProps<'input'> & AdditionalRadioProps;

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
}