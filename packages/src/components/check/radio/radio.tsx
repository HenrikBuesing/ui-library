import React, {type ComponentPropsWithoutRef} from 'react';
import generateKey from 'utils/generateKey';
import style from './radio.module.scss';
import check from '../check.module.scss';
import global from '@common/global.module.scss';

interface Radio extends ComponentPropsWithoutRef<'input'>{
  options     : RadioOption[];
  value       : string;
  valueChanged: (value: string) => void;
  color?      : string;
  dark?       : boolean;
}

export interface RadioOption {
  name     : string;
  value    : string;
  disabled?: boolean;
}

/**
 * @example
 * ```jsx
 * <Radio
 *  value={...}
 *  valueChanged={...}
 *  label={"..."}
 *  options={[...]}
 * />
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.hbsng.com/docs/components/radio).
 */
export function Radio(props: Radio) {
  const {
    color,
    dark = false,
    disabled,
    id,
    options,
    value,
    valueChanged,
    ...other
  } = props;

  const ID = id ?? generateKey();

  function handleChange(option: RadioOption) {
    if (value !== option.value && !option.disabled && !disabled) valueChanged(option.value);
  }

  function setCursor(option: RadioOption) {
    return (disabled || option.disabled) ? global.notAllowed : global.pointer
  }

  return (
    <div className={style.radioWrapper}>
      {options.map((option, idx) =>
        <div key={generateKey()} className={check.checkWrapper}>
          <div className={`${style.radio} ${setCursor(option)} ${check.check} ${dark ? check.dark : ''}`} onClick={() => {handleChange(option)}}>
            <input
              id={`${ID}-${idx}`}
              name={option.name}
              type={'radio'}
              value={option.value}
              checked={value === option.value}
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