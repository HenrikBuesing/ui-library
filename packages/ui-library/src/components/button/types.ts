import type {BaseComponentProps, Size, Status} from '../common/types';
import type {HTMLAttributeAnchorTarget, ReactNode} from 'react';

export type ButtonProps = BaseComponentProps<'button'> & {
  children: ReactNode;
  variant: 'filled' | 'outlined' | 'text';
  color?: `#${string}` | Status;
  rounded?: boolean;
  size?: Size;
} & ({
  href: string;
  target?: HTMLAttributeAnchorTarget;
} | {
  href?: never;
  target?: never;
});
