import type {BaseProps} from '../common/types';
import type {ReactNode} from 'react';

export type BurgerMenuProps = BaseProps & {
  alignment: 'left' | 'right';
  children: ReactNode;
  closeIcon?: ReactNode;
  openIcon?: ReactNode;
}

export type MenuProps = {
  children: ReactNode;
}