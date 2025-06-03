import type {BaseProps} from '../common/types';
import type {CSSProperties} from 'react';

export type SkeletonProps = BaseProps & {
  disableAnimation?: boolean;
  height?: CSSProperties['height'];
  rounded?: 'light' | 'medium' | 'full';
  width?: CSSProperties['width'];
}