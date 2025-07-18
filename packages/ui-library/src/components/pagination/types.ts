import type {BaseProps} from '../common/types';
import type {ReactNode} from 'react';

export type PaginationProps = BaseProps & {
  pages: number;
  activePage?: number;
  ariaLabels?: AriaLabels;
  boundary?: number;
  disableFirstButton?: boolean;
  disableLastButton?: boolean;
  disableNextButton?: boolean;
  disablePrevButton?: boolean;
  firstButton?: ReactNode;
  lastButton?: ReactNode;
  nextButton?: ReactNode;
  onChange?: (page: number) => void;
  prevButton?: ReactNode;
  siblings?: number;
}

type AriaLabels = {
  first?: string;
  last?: string;
  next?: string;
  prev?: string;
  page?: string;
}