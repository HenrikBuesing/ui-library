import type {BaseProps} from '../../common/types';
import type {ReactNode} from 'react';

export type TablePaginationProps = BaseProps & {
  entries: number;
  activePage?: number;
  nextButton?: ReactNode;
  onChange?: (page: number) => void;
  prevButton?: ReactNode;
  rowsSelection?: number[];
}