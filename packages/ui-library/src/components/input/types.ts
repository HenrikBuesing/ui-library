import type {BaseComponentProps} from '../common/types';
import type {InputDecorator} from './inputDecorator';
import type {ReactElement, ReactNode} from 'react';

export type InputProps = BaseComponentProps<'input'> & {
  label: string;
  variant: 'outlined' | 'basic'
  children?: ReactElement<InputDecoratorProps, typeof InputDecorator>;
  error?: boolean;
  helpText?: string;
};

export type TextareaProps = BaseComponentProps<'textarea'> & {
  label: string;
  error?: boolean;
  helpText?: string;
  resizable?: 'both' | 'vertical' | 'horizontal' | 'none';
};

export type InputDecoratorProps = {
  children: ReactNode;
  position?: 'start' | 'end';
  onFocus?: boolean;
}