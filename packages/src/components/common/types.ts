import type {ComponentPropsWithoutRef, ElementType, ReactNode} from "react";

export type Size = 'small' | 'medium' | 'large';

export type Status = 'success' | 'warning' | 'error';

export type BaseProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  dark?: boolean;
}

export type Label = {
  label: string;
  children?: never;
} | {
  label?: never;
  children: ReactNode;
};
