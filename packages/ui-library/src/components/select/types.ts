import type {BaseProps} from '../common/types';
import type {CSSProperties} from 'react';

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectOptionGroup = {
  label: string;
  options: SelectOption[];
  disabled?: boolean;
}

export type OptionProps = {
  activeIndex: number;
  groupDisabled: boolean;
  index: number;
  listId: string;
  onSelect: (val: string) => void;
  option: SelectOption;
  setActiveIndex: (index: number) => void;
  value: string;
}

export type SelectProps = BaseProps & {
  onChange: (value: string) => void;
  options: SelectOption[] | SelectOptionGroup [];
  placeholder: string;
  disabled?: boolean;
  value: string;
  openPosition?: 'top' | 'bottom';
  width: CSSProperties['width'];
};