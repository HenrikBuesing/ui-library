import type {BaseComponentProps, BaseProps} from '../common/types';
import type {ReactElement, ReactNode} from 'react';
import type {Details} from "./details";

export type DetailsProps = BaseComponentProps<'details'> & CommonDetailProps & {
  children: ReactNode;
  summary: ReactNode;
}

export type AccordionProps = BaseProps & CommonDetailProps & {
  children: ReactElement<DetailsProps, typeof Details>[];
  name?: string;
}

type CommonDetailProps = {
  divider?: boolean;
  icon?: ReactNode;
  iconPosition?: 'start' | 'end' | undefined;
}