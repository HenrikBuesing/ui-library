import React from 'react';
import generateKey from 'utils/generateKey';
import style from './radio.module.scss';
import check from '../check.module.scss';
import global from '@common/styles/global.module.scss';
import type {RadioOption, RadioProps} from "./types";

/**
 * @example
 * ```jsx
 * <Radio
 *  selected={...}
 *  selectionChanged={...}
 *  options={[...]}
 * />
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.hbsng.com/docs/components/radio).
 */
export function Radio(props: RadioProps) {
  const {
    color,
    dark = false,
    disabled,
    id,
    options,
    selected,
    selectionChanged,
    ...other
  } = props;

  const ID = id ?? generateKey();

  function handleChange(option: RadioOption) {
    if (selected !== option.value && !option.disabled && !disabled) selectionChanged(option.value);
  }

  function setCursor(option: RadioOption) {
    return (disabled || option.disabled) ? global.notAllowed : global.pointer
  }

  return (
    <div className={style.radioWrapper}>
      {options.map((option, idx) =>
        <div key={generateKey()} className={check.checkWrapper}>
          <div className={`${style.radio} ${setCursor(option)} ${check.check}${dark ? ` ${check.dark}` : ''}`} onClick={() => {handleChange(option)}}>
            <input
              id={`${ID}-${idx}`}
              name={option.name}
              type={'radio'}
              value={option.value}
              checked={selected === option.value}
              onChange={() => {handleChange(option)}}
              disabled={disabled ? disabled : option.disabled}
              {...other}
            />

            <div className={`${check.checkmark} ${style.radioCheck} ${dark ? check.dark : ''}`} style={{backgroundColor: color}}/>
          </div>

          <label htmlFor={`${ID}-${idx}`} className={`${global.fontMedium} ${setCursor(option)} ${style.text} ${dark ? style.dark : ''}`}>
            {option.name}
          </label>
        </div>
      )}
    </div>
  );
}