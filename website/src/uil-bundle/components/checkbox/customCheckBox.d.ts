import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
interface ICustomCheckbox extends ComponentPropsWithoutRef<'input'> {
    checked: boolean;
    label?: string;
    onCheck: (value: boolean) => void;
    checkColor?: string;
    children?: ReactNode;
}
export declare function CustomCheckBox(props: ICustomCheckbox): React.JSX.Element;
export {};
