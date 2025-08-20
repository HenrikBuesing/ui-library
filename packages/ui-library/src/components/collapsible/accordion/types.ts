import type {ReactElement, ReactNode} from 'react';
import type {DetailsProps} from '../details/types';
import type {BaseProps} from '../../common/types';
import type {Details} from '../details';

export type AccordionProps = BaseProps & {
  children: ReactElement<DetailsProps, typeof Details>[];
  divider?: boolean;
  icon?: ReactNode;
  iconPosition?: 'start' | 'end' | undefined;
  name?: string;
}