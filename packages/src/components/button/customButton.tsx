import React, {ComponentPropsWithoutRef, CSSProperties, useRef} from 'react';
import useInjectStyleSheet from 'utils/useInjectStyles';
import {useGetColor} from 'hooks/getColor';

type HEXColor = `#${string}`

interface ICustomButton extends ComponentPropsWithoutRef<'button'> {
  label    : string;
  disabled?: boolean;
  small?   : boolean;
  theme?   : HEXColor | 'success' | 'warning' | 'error';
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
export function CustomButton(props: ICustomButton) {
  const {
    disabled = false,
    label,
    small = false,
    theme,
    ...buttonProps
  } = props;

  const nodeRef = useRef<HTMLButtonElement>(null);
  useInjectStyleSheet(nodeRef);

  function getStyle(): CSSProperties | undefined {
    if (disabled || !theme) return undefined;

    if (theme.includes('#')) {
      return {
        color: useGetColor(theme),
        backgroundColor: theme,
        border: 'transparent'
      };
    }

    switch (theme) {
      case 'success':
        return {
          color: useGetColor('#006A4E'),
          backgroundColor: '#006A4E',
          border: 'transparent'
        };
      case 'warning':
        return {
          color: '#000000',
          backgroundColor: '#FFD700',
          border: 'transparent'
        };
      case 'error':
        return {
          color: useGetColor('#800020'),
          backgroundColor: '#800020',
          border: 'transparent'
        };
      default:
        throw new Error('invalid theme provided')
    }
  }

  function getClassName(): string {
    const base = 'uil-button uil-fit'

    if (disabled) {
      if (small) {
        return `${base} uil-disabled uil-small`;
      }

      return `${base} uil-font-base uil-disabled`;
    }

    if (small) {
      return `${base} uil-small`;
    }

    return `${base} uil-font-base`;
  }

  return (
    <button className={getClassName()} style={getStyle()} disabled={disabled} ref={nodeRef} {...buttonProps}>
      {label}
    </button>
  );
}