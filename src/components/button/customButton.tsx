import React, {ComponentPropsWithoutRef, CSSProperties} from 'react';
import './button.scss';

interface ICustomButton extends ComponentPropsWithoutRef<'button'> {
  label    : string;
  disabled?: boolean;
  small?   : boolean;
  theme?   : string;
}

export function CustomButton(props: ICustomButton) {
  const {
    disabled = false,
    label,
    small = false,
    theme,
    ...buttonProps
  } = props;

  function setColor(bgColor: string) {
    if (!theme || disabled) return null;

    const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
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

  const style: CSSProperties = {
    color: setColor(theme),
    backgroundColor: disabled? null : theme,
    fontSize: small? '1rem' : null,
    lineHeight: small? '1rem' : null,
    padding: small? '.25rem .5rem' : null,
    border: theme? 'none': null,
  }

  return (
    <button className={`uil-button ${disabled && 'uil-disabled'}`} style={style} disabled={disabled} {...buttonProps}>
      {label}
    </button>
  );
}