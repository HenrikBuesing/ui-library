import React from 'react';
import { IBaseInput } from './baseInput';
import './input.scss';
export interface ICustomInput extends IBaseInput {
    tooltipClose?: string;
    tooltipIcon?: string;
    tooltipText?: string;
}
export declare function CustomInput(props: ICustomInput): React.JSX.Element;
