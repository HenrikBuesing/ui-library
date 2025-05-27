import type {ReactNode} from 'react';

export type WrapperProps = {
  children: ReactNode;
  dark: boolean | undefined;
  error: boolean | undefined;
  helpText: string | undefined;
  id: string | undefined;
  label: string | undefined;
  required: boolean | undefined;
  isTextarea?: boolean;
  variant?: 'outlined' | 'basic'
};