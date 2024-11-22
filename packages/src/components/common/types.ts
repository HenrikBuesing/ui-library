import type {ReactNode} from "react";

//TODO find better names

export type StringText = {
  label    : string;
  children?: never;
}

export type HTMLText = {
  label?  : never;
  children: ReactNode;
}
