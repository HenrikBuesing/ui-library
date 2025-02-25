import global from '@common/styles/global.module.scss';
import {useContrastColor} from '@hooks/contrastColor';
import React, {type CSSProperties} from 'react';
import styles from './button.module.scss';
import cls from '@utils/conditionalClass';
import type {ButtonProps} from './types';

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

  let fontSize = '';
  switch (size) {
    case 'small':
      fontSize = global.fontSmall;
      break;
    case 'medium':
      fontSize = global.fontMedium;
      break;
    case 'large':
      fontSize = global.fontLarge;
      break;
    default:
      throw new Error(`<Button> received an unsupported size. Expected 'small', 'medium' or 'large', but got: ${String(size)}`);
  }

  function setStyle(): CSSProperties | undefined {
    if (variant !== 'primary' && variant !== 'outline' || disabled || !color?.includes('#')) return undefined;

    return variant === 'primary' ? {
      color: useContrastColor(color),
      backgroundColor: color,
    } : {
      color: color,
      borderColor: color
    };
  }

  return (
    <button
      style={setStyle()}
      className={cls([
        styles.button, global.fit, styles[size], styles[variant], disabled ? global.notAllowed : global.pointer,
        color && !color.includes('#') && styles[color as 'success' | 'warning' | 'error'], dark && styles.dark,
        disabled && styles.disabled, fontSize 
      ])}
      type={type ?? 'button'}
      disabled={disabled}
      {...other}
    >
      {children ?? label}
    </button>
  );
}