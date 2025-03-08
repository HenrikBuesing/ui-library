import type {MouseEventHandler, ReactElement, ReactNode} from 'react';
import type {BaseComponentProps} from '@common/types';
import type {InputDecorator} from './inputDecorator';

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
  position?: 'left' | 'right';
  onClick?: MouseEventHandler<HTMLDivElement>;
  onFocus?: boolean;
}