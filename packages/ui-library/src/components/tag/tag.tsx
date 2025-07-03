import React, {cloneElement, isValidElement, type ReactElement, type ReactHTMLElement, useRef} from 'react';
import {useContrastColor} from '@hooks/useContrastColor';
import global from '../common/styles/global.module.scss';
import useAddAttribution from '@utils/addAttribution';
import getFontsize from '@utils/getFontsize';
import {isStatus} from '@utils/checkTypes';
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

  const svgRef = useRef<SVGSVGElement>(null);
  const style = setStyle();
  const classNames = setClassName();
  let delIcon: ReactElement | null = null;

  if (onDelete) {
    let iconColor;
    
    if (variant === 'filled') {
      switch (color) {
        case 'info':
        case 'success':
        case 'error':
          iconColor = dark ? 'black' : 'white';
          break;
        case 'warning':
          iconColor = 'black';
          break;
        default:
          iconColor = useContrastColor(color);
      }
    } else if (!isStatus(color)) {
      iconColor = color;
    } else {
      iconColor = undefined;
    }

    delIcon = deleteIcon && isValidElement(deleteIcon) ? cloneElement(deleteIcon as ReactHTMLElement<HTMLElement>, {
        onClick: handleDelete
      }) :
      <svg ref={svgRef} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 384 512'} onClick={handleDelete} className={cls([styles.delIcon, styles[size]])} fill={iconColor}>
        <path d={'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'}/>
      </svg>
  }

  useAddAttribution(svgRef);

  function handleDelete(e: React.MouseEvent<HTMLElement | SVGElement>) {
    e.stopPropagation();

    onDelete?.();
  }

  function setStyle() {
    if (isStatus(color)) return;

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
      styles.tag, isStatus(color) && styles[color], styles[variant], global.fit,
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