import type {BaseComponentProps} from '../../common/types';
import type {CSSProperties, ReactNode} from 'react';

export type RadioProps = BaseComponentProps<'input'> & AdditionalRadioProps;

type AdditionalRadioProps = {
  children?: ReactNode;
  color?: CSSProperties['backgroundColor'];
}