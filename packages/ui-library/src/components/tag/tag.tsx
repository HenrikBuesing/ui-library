import React, {cloneElement, isValidElement, type ReactElement, type ReactHTMLElement} from 'react';
import {useContrastColor} from '@hooks/useContrastColor';
import global from '../common/styles/global.module.scss';
import getFontsize from '@utils/getFontsize';
import type {Status} from '../common/types';
import cls from '@utils/conditionalClass';
import styles from './tag.module.scss';
import type {TagProps} from './types';

export function Tag(props: TagProps) {
  const {
    children,
    color,
    dark = false,
    deleteIcon,
    elevated = false,
    href,
    label,
    onDelete,
    onClick,
    size = 'medium',
    target,
    variant
  } = props;

  const style = setStyle();
  const classNames = setClassName();
  let delIcon: ReactElement | null = null;

  if (onDelete) {
    let iconColor;

    if (variant === 'outlined') {
      iconColor = 'black';
    } else {
      switch (color) {
        case 'info':
        case 'success':
        case 'error':
          iconColor = 'white';
          break;
        case 'warning':
          iconColor = 'black';
          break;
        default:
          iconColor = useContrastColor(color);
      }
    }

    delIcon = deleteIcon && isValidElement(deleteIcon) ? cloneElement(deleteIcon as ReactHTMLElement<HTMLElement>, {
        onClick: handleDelete
      }) :
      <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' onClick={handleDelete} className={cls([styles.delIcon, styles[size]])} fill={iconColor}>
        <path d='M64 64a16 16 0 0 1 22 0l170 166L425 64a16 16 0 1 1 23 22L278 256l170 169a16 16 0 1 1-23 23L256 280 86 449a16 16 0 1 1-22-24l169-169L64 86a16 16 0 0 1 0-22'/>
      </svg>;
  }

  function handleDelete(e: React.MouseEvent<HTMLElement | SVGElement>) {
    e.stopPropagation();

    onDelete?.();
  }

  function setStyle() {
    if (!color?.includes('#')) return;

    return variant === 'filled' ?
      {
        backgroundColor: color,
        color: useContrastColor(color),
      } :
      {
        color: color,
        borderColor: color,
      };
  }

  function setClassName() {
    return cls([
      styles.tag, color && !color.includes('#') && styles[color as Status], styles[variant], global.fit,
      elevated && styles.elevated, dark && global.dark, getFontsize(size), styles[size],
      (onClick ?? href) && styles.clickable
    ]);
  }
  
  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter' || e.key === ' ') onClick?.();
  }

  if (href) {
    return (
      <a href={href} target={target} style={style} className={classNames}>
        {label ?? children}

        {delIcon}
      </a>
    )
  }

  return (
    <div
      className={classNames}
      onClick={() => {onClick?.()}}
      onKeyDown={onClick && handleKeyDown}
      role={onClick && 'button'}
      style={style}
      tabIndex={onClick && 0}
    >
      {label ?? children}

      {delIcon}
    </div>
  );
}