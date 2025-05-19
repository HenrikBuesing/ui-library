import type {CSSProperties, HTMLAttributeAnchorTarget, ReactNode} from 'react';
import type {BaseProps, Status} from '../common/types';

export type TagProps = BaseProps & {
  label: string;
  variant: 'filled' | 'outlined';
  color: Status | `#${string}`;
  deleteIcon?: ReactNode;
  onDelete?: () => void;
  onClick?: () => void;
  style?: CSSProperties;
  elevated?: boolean;
} & ({
  href: string;
  target?: HTMLAttributeAnchorTarget;
} | {
  href?: never;
  target?: never;
});