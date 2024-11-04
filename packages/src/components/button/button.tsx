import React, {ComponentPropsWithoutRef, CSSProperties} from 'react';
import {useContrastColor} from 'hooks/contrastColor';

export type HEX = `#${string}`

interface IBaseButton extends ComponentPropsWithoutRef<'button'> {
  label      : string;
  dark?      : boolean;
  disabled?  : boolean;
  size?      : 'small' | 'medium' | 'large';
}

interface ITheme {
  buttonType : 'primary' | 'outline';
  theme: HEX | 'success' | 'warning' | 'error';
}

interface INoTheme {
  buttonType : 'secondary' | 'text';
  theme?: never;
}

type IButton = IBaseButton & (ITheme | INoTheme);

/**
 * @example
 * ```jsx
 * <CustomButton
 *  buttonType={'primary'}
 *  label={'Click Me!'}
 *  dark={true}
 *  disabled={false}
 *  size={'large'}
 *  theme={'success'}
 *  onClick={() => {alert('click)}}
 * />
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.hbsng.com/docs/components/button)
 */
export function Button(props: IButton) {
  const {
    buttonType,
    theme,
    label,
    dark,
    disabled,
    size = 'medium',
    ...buttonProps
  } = props;

  function setStyle(): CSSProperties | undefined {
    if (buttonType !== 'primary' && buttonType !== 'outline' || disabled || !theme?.includes('#')) return undefined;

    return buttonType === 'primary' ? {
      color: useContrastColor(theme),
      backgroundColor: theme,
      borderColor: dark ? 'var(--uil-black-light)' : 'var(--uil-grey-darker)'
    } : {
      color: theme,
      backgroundColor: dark ? 'var(--uil-black-light)' : 'var(--uil-white)',
      borderColor: theme
    };
  }

  function setClassName() {
    const customTheme = theme?.includes('#');
    let className = `uil-button uil-fit uil-${size}`;

    if (dark) className += ' uil-dark';
    if (disabled) className += ' uil-disabled';

    switch (buttonType) {
      case 'primary':
        className += ' uil-primary';
        if (!customTheme) className += ` uil-${theme}`;
        break;
      case 'secondary':
        className += ' uil-secondary';
        break;
      case 'outline':
        className += ' uil-outline';
        if (!customTheme) className += ` uil-${theme}`;
        break;
      case 'text':
        className += ' uil-text';
        break;
    }

    return className;
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