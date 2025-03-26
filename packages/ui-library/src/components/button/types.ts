import type {BaseComponentProps, Size, Status} from '@common/types';
import type {ReactNode} from 'react';

export type ButtonProps = BaseComponentProps<'button'> & AdditionalButtonProps;

type AdditionalButtonProps = {
  children: ReactNode;
  variant: 'filled' | 'outlined' | 'text';
  color?: `#${string}` | Status;
  size?: Size;
} & ({
  href: string;
  disabled?: never;
  target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop';
} | {
  disabled?: boolean;
  href?: never;
  target?: never;
});
