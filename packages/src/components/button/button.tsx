import React, {ComponentPropsWithoutRef, CSSProperties} from 'react';
import {useContrastColor} from 'hooks/contrastColor';
import style from './button.module.scss';
import global from '../global.module.scss';

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
 * <Button
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
    //TODO add size
    let classes = [style.button, global.fit, style[buttonType]];

    if (dark) classes.push(style.dark);
    if (disabled) classes.push(style.disabled);
    if (!theme?.includes('#') && (buttonType === 'primary' || buttonType === 'outline')) classes.push(style[theme]);

    return classes.join(", ");
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