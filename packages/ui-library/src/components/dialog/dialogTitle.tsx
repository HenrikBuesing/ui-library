import {useContrastColor} from '@hooks/useContrastColor';
import global from '../common/styles/global.module.scss';
import React, {type CSSProperties} from 'react';
import type {DialogTitleProps} from './types';
import {isStatus} from '@utils/checkTypes';
import styles from './dialog.module.scss';
import cls from '@utils/conditionalClass';

export function DialogTitle(props: DialogTitleProps) {
  const {
    children,
    color,
    id
  } = props;

  const statusColor = isStatus(color);
  const style = getStyle();

  function getStyle() {
    if (color && !statusColor) {
      return {
        '--uil-dialog-title-font-color': useContrastColor(color),
        '--uil-dialog-title-background': color
      } as CSSProperties;
    }

    return undefined;
  }

  return (
    <div className={cls([styles.title, statusColor && styles[color], global.fontLarge])} id={id} style={style}>
      {children}
    </div>
  );
}