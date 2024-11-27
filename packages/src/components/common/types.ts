import type {ComponentPropsWithoutRef, ElementType, ReactNode} from "react";

export type Size = 'small' | 'medium' | 'large';

export type Status = 'success' | 'warning' | 'error';

export type Label = {
  label: string;
  children?: never;
} | {
  label?: never;
  children: ReactNode;
};

export type BaseComponentProps<T extends ElementType> = ComponentPropsWithoutRef<T> & BaseProps;

export type BaseProps = {
  dark?: boolean;
};
