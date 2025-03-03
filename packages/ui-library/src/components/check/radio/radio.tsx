import global from '@common/styles/global.module.scss';
import type {RadioOption, RadioProps} from './types';
import generateKey from '@utils/generateKey';
import cls from '@utils/conditionalClass';
import check from '../check.module.scss';
import style from './radio.module.scss';
import React from 'react';

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
          <div className={cls([style.radio, check.check, setCursor(option), dark && check.dark])} onClick={() => {handleChange(option)}}>
            <input
              id={`${ID}-${idx}`}
              name={option.name}
              type={'radio'}
              value={option.value}
              checked={selected === option.value}
              onChange={() => {handleChange(option)}}
              disabled={disabled ?? option.disabled}
              {...other}
            />

            <div className={cls([check.checkmark, style.radioCheck, dark && check.dark])} style={{backgroundColor: color}}/>
          </div>

          <label htmlFor={`${ID}-${idx}`} className={cls([global.fontMedium, style.text, setCursor(option), dark && style.dark])}>
            {option.name}
          </label>
        </div>
      )}
    </div>
  );
}