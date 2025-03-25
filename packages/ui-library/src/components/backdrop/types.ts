import type {MouseEventHandler, ReactNode} from 'react';

export type BackdropProps = {
  open: boolean;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  zIndex?: number | undefined;
}