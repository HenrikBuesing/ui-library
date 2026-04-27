import type {BaseProps, Status} from '../common/types';
import type {CSSProperties} from 'react';

type ProgressProps = BaseProps & {
  ariaLabel?: string;
  color?: CSSProperties['stroke'] | Status;
  value?: number
}

export type LinearProgressProps = ProgressProps & {
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
};

export type CircularProgressProps = ProgressProps & {
  size?: CSSProperties['height'];
};