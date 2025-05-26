import type {HTMLAttributeAnchorTarget, ReactNode} from 'react';
import type {BaseProps, Size, Status} from '../common/types';

export type TagProps = BaseProps & {
  color: Status | `#${string}`;
  variant: 'filled' | 'outlined';
  deleteIcon?: ReactNode;
  elevated?: boolean;
  onDelete?: () => void;
  onClick?: () => void;
  size?: Size;
} & ({
  href: string;
  target?: HTMLAttributeAnchorTarget;
} | {
  href?: never;
  target?: never;
}) & ({
  label: string;
  children?: never;
} | {
  label?: never;
  children: ReactNode;
});