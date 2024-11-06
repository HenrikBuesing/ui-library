import React, {ComponentPropsWithoutRef, CSSProperties} from 'react';

interface BaseIcon {
  src: string;
  color?: string | undefined;
  size?: 'small' | 'medium' | 'large';
}

interface IMG extends ComponentPropsWithoutRef<'img'> {
  type: 'img';
  alt: string;
}

interface SVG extends ComponentPropsWithoutRef<'svg'> {
  type: 'svg';
  alt?: never;
}

type IconType = BaseIcon & (SVG | IMG);

/**
 * @example
 * ```jsx
 * <Icon type={"img"} src={"foo/bar.png"} size={"medium"}/>
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.hbsng.com/docs/components/images).
 */
export function Icon(props: IconType) {
  const {
    alt,
    type,
    color,
    size = 'medium',
    src,
    ...iconProps
  } = props;

  const isSvg = type === 'svg';

  const style: CSSProperties = {
    fill: isSvg ? color : undefined,
    height: iconProps.height ? undefined : getSize(),
    width: iconProps.width ? undefined : getSize(),
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
        throw new Error('Unsupported icon size');
    }
  }

  return (
    <>
      {isSvg ?
        <svg style={style} {...iconProps as SVG}>
          <use href={src}/>
        </svg> :
        <img src={src} style={style} {...iconProps as IMG} alt={alt}/>
      }
    </>
  );
}