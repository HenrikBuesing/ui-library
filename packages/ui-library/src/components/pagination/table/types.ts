import type {BaseProps} from '../../common/types';
import type {ReactNode} from 'react';

export type TablePaginationProps = BaseProps & {
  entries: number;
  activePage?: number;
  entriesDescription?: string;
  nextButton?: ReactNode;
  nextLabel?: string;
  onChange?: (page: number, count: number) => void;
  prevButton?: ReactNode;
  prevLabel?: string;
  rowLabel?: string;
  rows?: number[];
}