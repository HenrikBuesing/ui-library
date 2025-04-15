import {useContrastColor} from '@hooks/useContrastColor';
import global from '@common/styles/global.module.scss';
import React, {type CSSProperties} from 'react';
import styles from './button.module.scss';
import cls from '@utils/conditionalClass';
import type {ButtonProps} from './types';

export function Button(props: ButtonProps) {
  const {
    children,
    color,
    dark,
    disabled,
    href,
    size = 'medium',
    target,
    variant,
    ...buttonProps
  } = props;

  const style = setStyle();

  function setStyle(): CSSProperties | undefined {
    if (disabled || !color?.includes('#')) return undefined;

    switch (variant) {
      case 'filled':
        return {
          color: useContrastColor(color),
          backgroundColor: color
        };
      case 'outlined':
        return {
          color: color,
          borderColor: color
        };
      case 'text':
        return {
          color: color
        };
      default:
        throw new Error(`<Button> received an unexpected variant. Expected 'filled', 'outline' or 'text', but got: ${String(variant)}'`);
    }
  }
  
  function setClasses() {
    let fontSize;

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

    return cls([
      styles.button, global.fit, fontSize, styles[size], styles[variant], dark && global.dark,
      color && !color.includes('#') && styles[color as 'success' | 'warning' | 'error'], style && styles.custom,
      disabled && styles.disabled
    ]);
  }
  
  if (href || href === '') {
    return (
      <a
        href={href}
        target={target}
        id={buttonProps.id}
        title={buttonProps.title}
        style={style}
        className={setClasses()}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={style}
      className={setClasses()}
      type={buttonProps.type ?? 'button'}
      disabled={disabled}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : buttonProps.tabIndex}
      {...buttonProps}
    >
      {children}
    </button>
  );
}