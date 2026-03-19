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
  disabled: boolean | undefined;
  index: number;
  listId: string;
  onSelect: (val: string) => void;
  option: SelectOption;
  setActiveIndex: (index: number) => void;
  value: string | string[];
}

export type SelectProps = BaseProps & {
  options: SelectOption[] | SelectOptionGroup [];
  placeholder: string;
  disabled?: boolean;
  openPosition?: 'top' | 'bottom';
  width?: CSSProperties['width'];
} & ({
  onChange: (value: string) => void;
  value: string;
  multi?: false;
} | {
  multi: true;
  onChange: (value: string[]) => void;
  value: string[]
});

export type RenderItem = {
  type: 'group';
  label: string
} | {
  type: 'option';
  option: SelectOption;
  groupDisabled: boolean;
  index: number;
};