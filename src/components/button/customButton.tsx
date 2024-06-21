import React, {ComponentPropsWithoutRef, CSSProperties} from 'react';
import './button.scss';

interface ICustomButton extends ComponentPropsWithoutRef<'button'> {
  label: string
  theme?: string
  small?: boolean
  disabled?: boolean
}


export function CustomButton(props: ICustomButton) {
  const {
    label,
    theme,
    small = true,
    disabled = false,
    ...buttonProps
  } = props;


  function getColor(bgColor: string) {
    if (!theme || disabled) return null;

    let color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    let r = parseInt(color.substring(0, 2), 16); // hexToR
    let g = parseInt(color.substring(2, 4), 16); // hexToG
    let b = parseInt(color.substring(4, 6), 16); // hexToB
    let uicolors = [r / 255, g / 255, b / 255];
    let c = uicolors.map((col) => {
      if (col <= 0.03928) {
        return col / 12.92;
      }
      return Math.pow((col + 0.055) / 1.055, 2.4);
    });
    let L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
    return L > 0.179 ? '#000000' : '#ffffff';
  }

  const style: CSSProperties = {
    color: getColor(theme),
    backgroundColor: disabled? null : theme,
    fontSize: small? '1rem' : null,
    lineHeight: small? '1rem' : null,
    padding: small? '.25rem .5rem' : null,
    border: theme? 'none': null,
  }

  return (
    <button className={`uil-button ${disabled? 'uil-disabled' : ''}`} style={style} disabled={disabled} {...buttonProps}>
      {label}
    </button>
  );
}