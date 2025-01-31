import type {ComponentPropsWithoutRef} from 'react';
import type {Size} from '@common/types';

export type IconProps = AdditionalIconProps;

type AdditionalIconProps = {
  src: string;
  size?: Size;
} & ({
  type: 'img';
  altText?: never;
} & ComponentPropsWithoutRef<'img'> | {
  type: 'svg';
  altText?: string;
} & ComponentPropsWithoutRef<'svg'>);