import type {ComponentPropsWithoutRef} from "react";
import type {Size} from "@common/types";

export type IconProps = AdditionalIconProps;

type AdditionalIconProps = {
  src: string;
  size?: Size;
} & ({
  type: 'img';
  title?: never;
} & ComponentPropsWithoutRef<'img'> | {
  type: 'svg';
  title?: string;
} & ComponentPropsWithoutRef<'svg'>);