import React from 'react';
interface ICustomRadio {
    options: RadioOption[];
    value: string;
    valueChanged: (value: string) => void;
    checkColor?: string;
    disabled?: boolean;
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
