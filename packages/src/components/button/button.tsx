import global from '@common/styles/global.module.scss';
import {useContrastColor} from '@hooks/contrastColor';
import React, {type CSSProperties} from 'react';
import styles from './button.module.scss';
import cls from '@utils/conditionalClass';
import type {ButtonProps} from './types';

/**
 * [Button documentation](https://www.ui-library.hbsng.com/docs/components/button)
 */
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
  const fontSize = setFontSize();

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
  
  function setFontSize() {
    switch (size) {
      case 'small':
        return global.fontSmall;
      case 'medium':
        return global.fontMedium;
      case 'large':
        return global.fontLarge;
      default:
        throw new Error(`<Button> received an unsupported size. Expected 'small', 'medium' or 'large', but got: ${String(size)}`);
    }
  }
  
  if (href || href === '') {
    return (
      <a
        href={href}
        target={target}
        id={buttonProps.id}
        title={buttonProps.title}
        style={style}
        className={cls([
          styles.button, global.fit, fontSize, styles[size], styles[variant], dark && global.dark,
          color && !color.includes('#') && styles[color as 'success' | 'warning' | 'error'], style && styles.custom,
          disabled && styles.disabled
        ])}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : (buttonProps.tabIndex ?? undefined)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={style}
      className={cls([
        styles.button, global.fit, fontSize, styles[size], styles[variant], dark && global.dark,
        color && !color.includes('#') && styles[color as 'success' | 'warning' | 'error'], style && styles.custom,
        disabled && styles.disabled 
      ])}
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