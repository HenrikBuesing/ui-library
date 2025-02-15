import type {BaseComponentProps} from '@common/types';
import type {InputDecorator} from './inputDecorator';
import type {ReactElement} from 'react';
import {Icon} from '../icon';
import type {IconProps} from "../icon/types";

export type InputProps = BaseComponentProps<'input'> & AdditionalInputProps;

type AdditionalInputProps = {
  label: string;
  variant: 'outlined' | 'basic'
  children?: ReactElement<typeof InputDecorator>;
  error?: boolean;
  helpText?: string;
}

export type InputDecoratorProps = {
  children: ReactElement<IconProps, typeof Icon> | string;
  position?: 'left' | 'right';
  visibility?: 'always' | 'focused';
}