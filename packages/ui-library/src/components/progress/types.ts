import type {BaseProps, Status} from '../common/types';
import type {CSSProperties} from 'react';

export type CircularProgressProps = BaseProps & {
  color?: CSSProperties['stroke'] | Status;
  size?: CSSProperties['height'];
  value?: number
};