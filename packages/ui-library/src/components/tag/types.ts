import type {CSSProperties, HTMLAttributeAnchorTarget, ReactNode} from 'react';
import type {BaseProps, Size, Status} from '../common/types';

export type TagProps = BaseProps & {
  label: string;
  variant: 'filled' | 'outlined';
  color: Status | `#${string}`;
  deleteIcon?: ReactNode;
  elevated?: boolean;
  onDelete?: () => void;
  onClick?: () => void;
  size?: Size;
  style?: CSSProperties;
} & ({
  href: string;
  target?: HTMLAttributeAnchorTarget;
} | {
  href?: never;
  target?: never;
});