import React, { ComponentPropsWithoutRef } from 'react';
import './button.scss';
type HEXColor = `#${string}`;
interface ICustomButton extends ComponentPropsWithoutRef<'button'> {
    label: string;
    disabled?: boolean;
    small?: boolean;
    theme?: HEXColor | 'success' | 'warning' | 'error';
}
export declare function CustomButton(props: ICustomButton): React.JSX.Element;
export {};
