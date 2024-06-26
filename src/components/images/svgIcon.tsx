import React, {CSSProperties} from 'react';
import './images.scss';

interface ISvgIcon {
  src    : string;
  color? : string | undefined;
  height?: number;
  width? : number;
}

export function SVG(props: ISvgIcon) {
  const {
    src,
    color,
    height,
    width
  } = props;

  if (!src.includes('.svg')) {
    throw new Error('Provided src is not an svg image');
  }

  const style: CSSProperties = {
    fill: color,
    height: `${height}px`,
    width: `${width}px`
  }

  return (
    <svg aria-hidden={true} className={'uil-svg'} style={style}>
      <use href={src}/>
    </svg>
  );
}