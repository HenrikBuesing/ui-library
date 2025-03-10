import type {BaseComponentProps} from '@common/types';
import type {InputDecorator} from './inputDecorator';
import type {ReactElement, ReactNode} from 'react';

export type InputProps = BaseComponentProps<'input'> & AdditionalInputProps;

type AdditionalInputProps = {
  label: string;
  variant: 'outlined' | 'basic'
  children?: ReactElement<InputDecoratorProps, typeof InputDecorator>;
  error?: boolean;
  helpText?: string;
}

export type InputDecoratorProps = {
  children: ReactNode;
  position?: 'start' | 'end';
  onFocus?: boolean;
}