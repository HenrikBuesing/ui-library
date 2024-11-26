import type {BaseComponentProps, Label, Size, Status} from '@common/types';

export type ButtonProps = BaseComponentProps<'button'> & AdditionalButtonProps;

type AdditionalButtonProps = Label & {
  size?: Size;
} & ({
  variant: 'primary' | 'outline';
  color: `#${string}` | Status;
} | {
  variant: 'secondary' | 'text';
  color?: never;
});