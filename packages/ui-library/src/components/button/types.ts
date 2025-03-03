import type {BaseComponentProps, Size, Status} from '@common/types';
import type {ReactNode} from 'react';

export type ButtonProps = BaseComponentProps<'button'> & AdditionalButtonProps;

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
