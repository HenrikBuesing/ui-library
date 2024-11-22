import React, {type ComponentPropsWithoutRef, type CSSProperties} from 'react';

interface Icon {
  src: string;
  color?: string | undefined;
  size?: 'small' | 'medium' | 'large';
}

interface IMG extends ComponentPropsWithoutRef<'img'> {
  type: 'img';
}

interface SVG extends ComponentPropsWithoutRef<'svg'> {
  type: 'svg';
}

/**
 * @example
 * ```jsx
 * <Icon type={"img"} src={"foo/bar.png"} size={"medium"}/>
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.hbsng.com/docs/components/icon).
 */
export function Icon(props: Icon & (SVG | IMG)) {
  const {
    height,
    type,
    color,
    size = 'medium',
    src,
    width,
    ...other
  } = props;

  const imgProps = other as IMG;
  const isSvg = type === 'svg';

  const style: CSSProperties = {
    fill: isSvg ? color : undefined,
    height: height ?? getSize(),
    width: width ?? getSize(),
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
        throw new Error('[Icon] Unsupported size');
    }
  }

  return (
    <>
      {isSvg ?
        <svg style={style} {...other as SVG}>
          <use href={src}/>
        </svg> :
        <img src={src} alt={imgProps.alt} style={style} {...imgProps}/>
      }
    </>
  );
}