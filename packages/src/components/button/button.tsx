import React, {ComponentPropsWithoutRef, CSSProperties} from 'react';
import {useContrastColor} from 'hooks/contrastColor';

export type HEX = `#${string}`

interface ICustomButton extends ComponentPropsWithoutRef<'button'> {
  buttonType : 'primary' | 'secondary' | 'outline' | 'text';
  theme?     : HEX | 'success' | 'warning' | 'error' | null;
  label      : string;
  dark?      : boolean;
  disabled?  : boolean;
  small?     : boolean;
}

/**
 * @example
 * ```jsx
 * <CustomButton
 *  label={'Click Me!'}
 *  disabled={false}
 *  small={true}
 *  theme={'success'}
 *  onClick={() => {ClickFunction()}}
 * />
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.hbsng.com/docs/components/button)
 */
export function Button(props: ICustomButton) {
  const {
    buttonType,
    theme,
    label,
    dark,
    disabled,
    small,
    ...buttonProps
  } = props;

  function setStyle(): CSSProperties | undefined {
    if (buttonType !== 'primary' && buttonType !== 'outline') return undefined;

    if (disabled || !theme || !theme.includes('#')) return undefined;

    let styles: CSSProperties = {
      color: useContrastColor(theme),
      backgroundColor: theme,
      borderColor: 'var(--uil-grey-darker)'
    };

    if (dark) {
      styles.borderColor = 'var(--uil-black-light)';
    }

    return styles;
  }

  function getTheme() {
    switch (theme) {
      case 'success':
        return 'uil-success';
      case 'warning':
        return  'uil-warning';
      case 'error':
        return 'uil-error';
      default: return '';
    }
  }

  function setClassName() {
    let className: string;

    switch (buttonType) {
      case 'primary':
        className = getTheme();
        break;
      case 'secondary':
        className = 'uil-secondary';
        break;
      case 'outline':
        className = `uil-outline ${getTheme()}`;
        break;
      case 'text':
        className = 'uil-text';
        break;
    }

    return `uil-button uil-fit ${small ? 'uil-small' : 'uil-font-base'} ${disabled ? 'uil-disabled' : ''} ${dark ? 'uil-dark' : ''} ${className}`;
  }

  return (
    <button
      style={setStyle()}
      className={setClassName()}
      type={buttonProps.type?? 'button'}
      disabled={disabled}
      {...buttonProps}
    >
      {label}
    </button>
  );
}