import type {BaseComponentProps} from '../../common/types';
import type {ReactNode} from 'react';

export type DetailsProps = BaseComponentProps<'details'> & {
  children: ReactNode;
  summary: ReactNode;
  divider?: boolean;
  icon?: ReactNode;
  iconPosition?: 'start' | 'end' | undefined;
}