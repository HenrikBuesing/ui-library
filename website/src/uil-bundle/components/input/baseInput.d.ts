import React, { ComponentPropsWithoutRef } from 'react';
export interface IBaseInput extends ComponentPropsWithoutRef<'input'> {
    label: string;
    value: string;
    valueChanged: (value: string) => void;
    iconColor?: string;
    iconSrc?: string;
    inputColor?: string;
    toggle?: () => void;
}
export declare function BaseInput(props: IBaseInput): React.JSX.Element;
