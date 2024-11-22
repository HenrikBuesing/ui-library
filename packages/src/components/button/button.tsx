import React, {type ComponentPropsWithoutRef, type CSSProperties, type ReactNode} from 'react';
import {useContrastColor} from 'hooks/contrastColor';
import style from './button.module.scss';
import global from '../common/global.module.scss';
import type {HTMLText, StringText} from "../common/types";

type ButtonProps = ComponentPropsWithoutRef<'button'> &
  {
    dark?: boolean;
    size?: 'small' | 'medium' | 'large';
  } &
  (StringText | HTMLText) &
  (
    {
      buttonType: 'primary' | 'outline';
      theme     : `#${string}` | 'success' | 'warning' | 'error';
    } |
    {
      buttonType: 'secondary' | 'text';
      theme?    : never;
    }
  );

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
export function Button(props: ButtonProps) {
  const {
    buttonType,
    children,
    dark,
    disabled,
    label,
    size = 'medium',
    theme,
    type,
    ...other
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
    const themeClass = (theme && !theme.includes('#')) ? ` ${style[theme as 'success' | 'warning' | 'error']}` : '';
    let sizeClass = style[size];

    switch (size) {
      case 'small':
        sizeClass += ` ${global.fontSmall}`;
        break;
      case 'medium':
        sizeClass += ` ${global.fontMedium}`;
        break;
      case 'large':
        sizeClass += ` ${global.fontLarge}`;
        break;
      default:
        throw new Error('[Button] Unsupported size');
    }

    return `${global.fit} ${disabled ? global.notAllowed : global.pointer} ${style.button} ${style[buttonType]} ${sizeClass}${dark ? ` ${style.dark}` : ''}${disabled ? ` ${style.disabled}` : ''}${themeClass}`;
  }

  return (
    <button
      style={setStyle()}
      className={setClassName()}
      type={type ?? 'button'}
      disabled={disabled}
      {...other}
    >
      {children || label}
    </button>
  );
}