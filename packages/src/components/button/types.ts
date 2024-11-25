import type {BaseProps, Label, Size, Status} from "../common/types";

export type ButtonProps = BaseProps<'button'> & AdditionalButtonProps;

type AdditionalButtonProps = Label & {
  size?: Size;
} & ({
  variant: 'primary' | 'outline';
  color: `#${string}` | Status;
} | {
  variant: 'secondary' | 'text';
  color?: never;
});