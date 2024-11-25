import React, {type CSSProperties} from 'react';
import {useContrastColor} from 'hooks/contrastColor';
import type {ButtonProps} from "./types";
import global from '../common/global.module.scss';
import styles from './button.module.scss';

/**
 * @example
 * ```jsx
 * <Button
 *  variant={'primary'}
 *  label={'Click Me!'}
 *  dark={true}
 *  size={'large'}
 *  color={'success'}
 *  onClick={() => {alert('click)}}
 * />
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.hbsng.com/docs/components/button)
 */
export function Button(props: ButtonProps) {
  const {
    children,
    color,
    dark,
    disabled,
    label,
    size = 'medium',
    type,
    variant,
    ...other
  } = props;

  function setStyle(): CSSProperties | undefined {
    if (variant !== 'primary' && variant !== 'outline' || disabled || !color?.includes('#')) return undefined;

    return variant === 'primary' ? {
      color: useContrastColor(color),
      backgroundColor: color,
      borderColor: dark ? 'var(--uil-black-light)' : 'var(--uil-grey-darker)'
    } : {
      color: color,
      backgroundColor: dark ? 'var(--uil-black-light)' : 'var(--uil-white)',
      borderColor: color
    };
  }

  function setClassName() {
    const colorClass = (color && !color.includes('#')) ? ` ${styles[color as 'success' | 'warning' | 'error']}` : '';
    let sizeClass = styles[size];

    switch (size) {
      case 'small':
        sizeClass += ` ${global.fontSmall}`;
        break;
      case 'medium':
        sizeClass += ` ${global.fontMedium}`;
        break;
      case 'large':
        sizeClass += ` ${global.fontLarge}`;
        break;
      default:
        throw new Error('[Button] unsupported size');
    }

    return `${global.fit} ${disabled ? global.notAllowed : global.pointer} ${styles.button} ${styles[variant]} ${sizeClass}${dark ? ` ${styles.dark}` : ''}${disabled ? ` ${styles.disabled}` : ''}${colorClass}`;
  }

  return (
    <button
      style={setStyle()}
      className={setClassName()}
      type={type ?? 'button'}
      disabled={disabled}
      {...other}
    >
      {children ?? label}
    </button>
  );
}