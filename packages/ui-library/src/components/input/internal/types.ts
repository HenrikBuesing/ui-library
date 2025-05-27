import type {ReactNode} from 'react';

export type WrapperProps = {
  children: ReactNode;
  dark: boolean | undefined;
  error: boolean | undefined;
  helpId: string | undefined;
  helpText: string | undefined;
  id: string;
  label: string | undefined;
  required: boolean | undefined;
  isTextarea?: boolean;
  variant?: 'outlined' | 'basic'
};