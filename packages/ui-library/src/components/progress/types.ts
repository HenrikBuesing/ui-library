import type {BaseProps, Status} from '../common/types';
import type {CSSProperties} from 'react';

export type ProgressProps = BaseProps & {
  ariaLabel?: string;
  color?: CSSProperties['stroke'] | Status;
  height?: CSSProperties['height'];
  value?: number
  width?: CSSProperties['width'];
};