import React, {type ComponentPropsWithoutRef} from 'react';
import generateKey from '@utils/generateKey';
import type {IconProps} from './types';
import styles from './icon.module.scss';

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
    size = 'medium',
    src,
    altText,
    type,
    ...other
  } = props;

  const imgProps = other as ComponentPropsWithoutRef<'img'>;
  const ID = altText ? other.id ?? generateKey() : undefined;

  function setClassName() {
    if (other.height || other.width) return undefined;
    if (size !== 'small' && size !== 'medium' && size !== 'large') throw new Error('[Icon] unsupported size');
    
    return styles[size];
  }

  return (
    <>
      {type === 'svg' ?
        <svg className={setClassName()} style={other.style} {...other as ComponentPropsWithoutRef<'svg'>} aria-labelledby={ID} role={other.role ?? 'img'}>
          {altText && <title id={ID}>{altText}</title>}
          <use href={src}/>
        </svg> :
        <img src={src} alt={imgProps.alt ?? ''} className={setClassName()} style={imgProps.style} {...imgProps}/>
      }
    </>
  );
}