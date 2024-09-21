import React, {useEffect, useRef} from 'react';
import generateKey from 'utils/generateKey';
import useInjectStyleSheet from 'utils/useInjectStyles';

interface ICustomRadio {
  options     : RadioOption[];
  value       : string;
  valueChanged: (value: string) => void;
  checkColor? : string;
  disabled?   : boolean;
  label?      : string;
}

export interface RadioOption {
  label    : string;
  value    : string;
  checked? : boolean;
  disabled?: boolean;
}

export function CustomRadio(props: ICustomRadio) {
  const {
    checkColor,
    disabled,
    label,
    options,
    value,
    valueChanged,
  } = props;

  const id = generateKey('radio');
  const nodeRef = useRef<HTMLDivElement>(null);
  useInjectStyleSheet(nodeRef);

  useEffect(() => {
    // prevents multiple radio options being checked at the same time
    options.forEach(option => {
      if (option.checked) handleRadioChange(option);
    });
  },[]);

  function handleRadioChange(option: RadioOption) {
    if (value === option.value || option.disabled || disabled) return;

    valueChanged(option.value);
  }

  return (
    <div ref={nodeRef}>
      {label && <div className={'uil-radio-title'}>{label}</div>}

      <div className={'uil-radio-wrapper'}>
        {options.map((option, idx) =>
          <div key={generateKey(idx)} className={'uil-radio-option'}>
            <div className={'uil-radio uil-check'} onClick={() => {handleRadioChange(option)}}>
              <input
                id={`${idx}-${id}`}
                name={option.label}
                type={'radio'}
                value={option.value}
                checked={value === option.value || value === '' && option.checked}
                onChange={() => {handleRadioChange(option)}}
                disabled={disabled? disabled : option.disabled}
              />
              <div className={'uil-checkmark uil-radio-check'} style={{backgroundColor: checkColor}}/>
            </div>

            <label htmlFor={`${idx}-${id}`} className={'uil-font-base'}>{option.label}</label>
          </div>
        )}
      </div>
    </div>
  );
}