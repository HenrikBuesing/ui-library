import React, {ComponentPropsWithoutRef, CSSProperties, useRef} from 'react';
import useInjectStyleSheet from 'utils/useInjectStyles';

interface ISvgIcon extends ComponentPropsWithoutRef<'svg'>{
  src    : string;
  color? : string | undefined;
  height?: number;
  width? : number;
}

export function SVG(props: ISvgIcon) {
  const {
    color,
    height,
    src,
    width
  } = props;

  if (!src.includes('.svg')) {
    throw new Error('Provided src is not an svg image');
  }

  const style: CSSProperties = {
    fill: color,
    height: height,
    width: width,
  }

  const nodeRef = useRef<HTMLDivElement>(null);
  useInjectStyleSheet(nodeRef);

  return (
    <div ref={nodeRef} className={'uil-svg-wrapper'}>
      <svg aria-hidden={true} className={'uil-svg'} style={style}>
        <use href={src}/>
      </svg>
    </div>
  );
}