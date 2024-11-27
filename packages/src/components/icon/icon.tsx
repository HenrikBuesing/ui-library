import React, {type ComponentPropsWithoutRef, type CSSProperties} from 'react';
import type {IconProps} from "./types";
import generateKey from "@utils/generateKey";

/**
 * @example
 * ```jsx
 * <Icon type={"img"} src={"foo/bar.png"} size={"medium"}/>
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.hbsng.com/docs/components/icon).
 */
export function Icon(props: IconProps) {
  const {
    height,
    size = 'medium',
    src,
    altText,
    type,
    width,
    ...other
  } = props;

  const imgProps = other as ComponentPropsWithoutRef<'img'>;
  const isSvg = type === 'svg';
  const ID = altText ? other.id ?? generateKey() : undefined;
  const s = getSize();

  const style: CSSProperties = {
    height: height ?? s,
    width: width ?? s,
  }

  function getSize() {
    switch (size) {
      case 'small':
        return 'var(--uil-m)';
      case 'medium':
        return 'var(--uil-xxxl)';
      case 'large':
        return '3rem';
      default:
        throw new Error('[Icon] unsupported size');
    }
  }

  return (
    <>
      {isSvg ?
        <svg style={style} {...other as ComponentPropsWithoutRef<'svg'>} aria-labelledby={ID} role={other.role ?? 'img'}>
          {altText && <title id={ID}>{altText}</title>}
          <use href={src}/>
        </svg> :
        <img src={src} alt={imgProps.alt} style={style} {...imgProps}/>
      }
    </>
  );
}