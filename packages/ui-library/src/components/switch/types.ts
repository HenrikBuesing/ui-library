import type {BaseComponentProps, Size, Status} from '../common/types';
import type {CSSProperties} from 'react';

export type SwitchProps = Omit<BaseComponentProps<'input'>, 'size'> & {
  color?: Status | CSSProperties['backgroundColor'];
  size?: Size;
}