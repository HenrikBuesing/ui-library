import type {BaseProps} from '../common/types';
import type {ReactNode} from 'react';

export type PaginationProps = BaseProps & {
  pages: number;
  activePage?: number;
  afterCollapse?: number;
  beforeCollapse?: number;
  collapse?: number;
  firstButton?: ReactNode;
  disableFirstButton?: boolean;
  lastButton?: ReactNode;
  disableLastButton?: boolean;
  nextButton?: ReactNode;
  disableNextButton?: boolean;
  prevButton?: ReactNode;
  disablePrevButton?: boolean;
}