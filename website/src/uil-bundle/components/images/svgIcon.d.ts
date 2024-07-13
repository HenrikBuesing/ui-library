import React, { ComponentPropsWithoutRef } from 'react';
import './images.scss';
interface ISvgIcon extends ComponentPropsWithoutRef<'svg'> {
    src: string;
    color?: string | undefined;
    height?: number;
    width?: number;
}
export declare function SVG(props: ISvgIcon): React.JSX.Element;
export {};
