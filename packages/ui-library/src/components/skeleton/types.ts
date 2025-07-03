import type {BaseProps} from '../common/types';
import type {CSSProperties} from 'react';

export type SkeletonProps = BaseProps & {
  disableAnimation?: boolean;
  height?: CSSProperties['height'];
  radius?: CSSProperties['borderRadius'];
  width?: CSSProperties['width'];
}