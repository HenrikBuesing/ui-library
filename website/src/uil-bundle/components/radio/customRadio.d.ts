import React, { ComponentPropsWithoutRef } from 'react';
interface ICustomRadio extends ComponentPropsWithoutRef<'input'> {
    options: RadioOption[];
    value: string;
    valueChanged: (value: string) => void;
    checkColor?: string;
    label?: string;
}
export interface RadioOption {
    label: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
}
export declare function CustomRadio(props: ICustomRadio): React.JSX.Element;
export {};
