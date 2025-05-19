import React, {cloneElement, isValidElement, type ReactElement, type ReactHTMLElement} from 'react';
import {useContrastColor} from '@hooks/useContrastColor';
import global from '../common/styles/global.module.scss';
import type {Status} from '../common/types';
import cls from '@utils/conditionalClass';
import styles from './tag.module.scss';
import type {TagProps} from './types';

export function Tag(props: TagProps) {
  const {
    dark,
    elevated,
    label,
    color,
    href,
    deleteIcon,
    onDelete,
    onClick,
    style,
    target,
    variant
  } = props;
  
  let delIcon: ReactElement | null = null;

  if (onDelete) {
    delIcon = deleteIcon && isValidElement(deleteIcon) ? cloneElement(deleteIcon as ReactHTMLElement<HTMLElement>, {
        onClick: handleDelete
      }) :
      <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
        <path d='M64 64a16 16 0 0 1 22 0l170 166L425 64a16 16 0 1 1 23 22L278 256l170 169a16 16 0 1 1-23 23L256 280 86 449a16 16 0 1 1-22-24l169-169L64 86a16 16 0 0 1 0-22'/>
      </svg>;
  }
  
  function handleDelete(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    
    onDelete?.();
  }

  function setStyle() {
    if (!color?.includes('#')) return style;

    return variant === 'filled' ?
      {
        ...style,
        backgroundColor: color,
        color: useContrastColor(color),
      } :
      {
        ...style,
        color: color,
        borderColor: color,
      }
  }
  
  function setClassName() {
    return cls([
      styles.tag, color && !color.includes('#') && styles[color as Status], styles[variant],
      elevated && styles.elevated, dark && global.dark
    ]);
  }
  
  if (href) {
    return (
      <a href={href} target={target} style={setStyle()} className={setClassName()}>
        {label}

        {delIcon}
      </a>
    )
  }

  return (
    <div style={setStyle()} className={setClassName()} onClick={() => {onClick?.()}}>
      {label}

      {delIcon}
    </div>
  );
}