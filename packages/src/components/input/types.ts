import type {BaseComponentProps} from '@common/types';
import type {ReactElement} from 'react';
import {Icon} from '../icon';

export type InputProps = BaseComponentProps<'input'> & AdditionalInputProps;

type AdditionalInputProps = {
  label: string;
  variant: 'outlined' | 'basic'
  children?: ReactElement<typeof Icon> | HTMLImageElement | SVGElement;
  helpText?: string;
}