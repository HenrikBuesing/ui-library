import React, {ComponentPropsWithoutRef, CSSProperties} from 'react';
import './button.scss';

type HEXColor = `#${string}`

interface ICustomButton extends ComponentPropsWithoutRef<'button'> {
  label    : string;
  disabled?: boolean;
  small?   : boolean;
  theme?   : HEXColor | 'success' | 'warning' | 'error';
}

export function CustomButton(props: ICustomButton) {
  const {
    disabled = false,
    label,
    small = false,
    theme,
    ...buttonProps
  } = props;

  function setColor(color: string) {
    if (!color || disabled) return undefined;
    if (color.length !== 7) throw new Error('provided hex color must be 7 characters (including #) long');

    color = color.substring(1, 7);
    const uiColors = [
      parseInt(color.substring(0, 2), 16) / 255,
      parseInt(color.substring(2, 4), 16) / 255,
      parseInt(color.substring(4, 6), 16) / 255
    ];
    const c = uiColors.map(col => {
      return col <= 0.03928? (col / 12.92) : Math.pow((col + 0.055) / 1.055, 2.4);
    });
    const L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);

    return L > 0.179 ? '#000000' : '#ffffff';
  }

  function getStyle(): CSSProperties {
    if (!theme) {
      return {
        color: '#000000',
        backgroundColor: undefined,
        border: undefined
      };
    }

    if (theme.includes('#')) {
      return {
        color: setColor(theme),
        backgroundColor: disabled ? undefined : theme,
        border: 'transparent'
      };
    }

    switch (theme) {
      case 'success':
        return {
          color: setColor('#006A4E'),
          backgroundColor: disabled ? undefined : '#006A4E',
          border: 'transparent'
        };
      case 'warning':
        return {
          color: '#000000',
          backgroundColor: disabled ? undefined : '#FFD700',
          border: 'transparent'
        };
      case 'error':
        return {
          color: setColor('#800020'),
          backgroundColor: disabled ? undefined : '#800020',
          border: 'transparent'
        };
      default:
        throw new Error('invalid theme provided')
    }
  }

  const style: CSSProperties = getStyle();

  function getClassName() {
    if (disabled && !small) {
      return 'uil-button uil-disabled';
    }

    if (disabled && small) {
      return 'uil-button uil-disabled uil-small';
    }

    if (small) {
      return 'uil-button uil-small';
    }

    return 'uil-button';
  }

  return (
    <button className={getClassName()} style={style} disabled={disabled} {...buttonProps}>
      {label}
    </button>
  );
}