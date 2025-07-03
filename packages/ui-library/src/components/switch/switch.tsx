import React, {type ChangeEvent, type CSSProperties, useRef} from 'react';
import global from '../common/styles/global.module.scss';
import {isStatus} from '@utils/checkTypes';
import styles from './switch.module.scss';
import cls from '@utils/conditionalClass';
import type {SwitchProps} from './types';

export function Switch(props: SwitchProps) {
  const {
    color = 'info',
    dark = false,
    disabled,
    onChange,
    size = 'medium',
    ...other
  } = props;

  const StatusColor = isStatus(color);
  const customColor = StatusColor ? undefined : {
    '--uil-switch-color': color
  } as CSSProperties;
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!disabled) {
      onChange?.(e);
    }
  }
  
  function handleClick() {
    inputRef.current?.click();
  }
  
  return (
    <div 
      className={cls([styles.switch, styles[size], StatusColor && styles[color], dark && global.dark])} 
      onClick={() => {handleClick()}}
      style={customColor}
    >
      <div className={styles.thumbWrapper}>
        <div className={styles.thumb}/>
        <input type={'checkbox'} disabled={disabled} ref={inputRef} onChange={handleChange} {...other}/>
      </div>

      <div className={styles.track}/>
    </div>
  );
}