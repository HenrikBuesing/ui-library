import type {ComponentPropsWithRef, ElementType} from 'react';

export type Size = 'small' | 'medium' | 'large';

export type Status = 'success' | 'warning' | 'error';

export type BaseComponentProps<T extends ElementType> = ComponentPropsWithRef<T> & BaseProps;

export type BaseProps = {
  dark?: boolean | undefined;
}
