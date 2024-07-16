import React, {ComponentPropsWithoutRef, CSSProperties, useRef} from 'react';
import useInjectStyleSheet from "utils/useInjectStyles";

interface ISvgIcon extends ComponentPropsWithoutRef<'svg'>{
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

  const nodeRef = useRef<HTMLDivElement>(null);
  useInjectStyleSheet(nodeRef);

  const style: CSSProperties = {
    fill: color,
    height: `${height}px`,
    width: `${width}px`
  }

  return (
    <div ref={nodeRef} className={'uil-svg-wrapper'}>
      <svg aria-hidden={true} className={'uil-svg'} style={style}>
        <use href={src}/>
      </svg>
    </div>
  );
}