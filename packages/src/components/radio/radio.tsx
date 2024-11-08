import React from 'react';
import generateKey from 'utils/generateKey';

interface Radio {
  options     : RadioOption[];
  value       : string;
  valueChanged: (value: string) => void;
  color?      : string;
  dark?       : boolean;
  disabled?   : boolean;
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
    options,
    value,
    valueChanged,
  } = props;

  const id = generateKey('radio');

  function handleRadioChange(option: RadioOption) {
    if (value === option.value || option.disabled || disabled) return;

    valueChanged(option.value);
  }

  return (
    <div className={'uil-radio-wrapper'}>
      {options.map((option, idx) =>
        <div key={generateKey(idx)} className={'uil-radio-option'}>
          <div className={`uil-radio uil-check ${dark ? 'uil-dark' : ''}`} onClick={() => {handleRadioChange(option)}}>
            <input
              id={`${idx}-${id}`}
              name={option.name}
              type={'radio'}
              value={option.value}
              checked={value === option.value}
              onChange={() => {handleRadioChange(option)}}
              disabled={disabled ? disabled : option.disabled}
            />

            <div className={`uil-checkmark uil-radio-check ${dark ? 'uil-dark' : ''}`} style={{backgroundColor: color}}/>
          </div>

          <label htmlFor={`${idx}-${id}`} className={`uil-font-base ${dark ? 'uil-radio-text uil-dark' : 'uil-radio-text'}`}>{option.name}</label>
        </div>
      )}
    </div>
  );
}