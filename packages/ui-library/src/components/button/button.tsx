import {useContrastColor} from '@hooks/useContrastColor';
import global from '../common/styles/global.module.scss';
import React, {type CSSProperties} from 'react';
import getFontsize from '@utils/getFontsize';
import {hexToRgb} from '@utils/colorConvert';
import {isStatus} from '@utils/checkTypes';
import styles from './button.module.scss';
import cls from '@utils/conditionalClass';
import type {ButtonProps} from './types';

export function Button(props: ButtonProps) {
  const {
    children,
    color = 'info',
    dark = false,
    disabled = false,
    href,
    rounded = false,
    size = 'medium',
    target,
    variant,
    ...buttonProps
  } = props;

  const className = setClassName();
  const style = setStyle();

  function setClassName() {
    return cls([
      styles.button, global.fit, styles[size], styles[variant], dark && global.dark, disabled && styles.disabled,
      isStatus(color) && styles[color], getFontsize(size), rounded && styles.rounded
    ]);
  }

  function setStyle(): CSSProperties | undefined {
    if (disabled || isStatus(color)) return undefined;
    
    const rgb = hexToRgb(color, '<Button>');

    return {
      '--uil-button-font-color': useContrastColor(color),
      '--uil-button-color': color,
      '--uil-button-hover-color': `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`,
    } as CSSProperties;
  }
  
  if (href || href === '') {
    return (
      <a
        href={href}
        target={target}
        id={buttonProps.id}
        title={buttonProps.title}
        style={style}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={style}
      className={className}
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