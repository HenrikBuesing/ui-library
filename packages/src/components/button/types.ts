import type {ComponentPropsWithRef, ReactNode} from 'react';
import type {Size, Status} from '@common/types';

export type ButtonProps = ComponentPropsWithRef<'button'> & AdditionalButtonProps;

type AdditionalButtonProps = {
  children: ReactNode;
  variant: 'filled' | 'outlined' | 'text';
  color?: `#${string}` | Status;
  disabled?: boolean;
  size?: Size;
} & ({
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop';
} | {
  href?: never;
  target?: never;
});
