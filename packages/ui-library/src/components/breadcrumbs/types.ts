import type {ComponentProps, ReactNode} from 'react';
import type {BaseProps} from '../common/types';

export type BreadcrumbsType = BaseProps & {
  children: ReactNode;
  afterCollapse?: number;
  beforeCollapse?: number;
  expandButtonLabel?: string;
  highlightLast?: boolean;
  maxEntries?: number;
  separator?: ReactNode;
  'aria-label'?: ComponentProps<'nav'>['aria-label'];
}