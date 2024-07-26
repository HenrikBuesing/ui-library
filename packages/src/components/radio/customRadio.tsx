import React, {useEffect, useRef} from 'react';
import generateKey from 'utils/generateKey';
import useInjectStyleSheet from "utils/useInjectStyles";

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

  const nodeRef = useRef<HTMLDivElement>(null);
  useInjectStyleSheet(nodeRef);

  useEffect(() => {
    // prevents multiple radio options being checked at the same time
    options.forEach(option => {
      if (option.checked) handleRadioChange(option.value);
    });
  },[]);

  function handleRadioChange(newValue: string) {
    if (value === newValue) return;

    valueChanged(newValue);
  }

  return (
    <div ref={nodeRef}>
      {label && <div className={'uil-radio-title'}>{label}</div>}

      <div className={'uil-radio-wrapper'}>
        {options.map((option, idx) =>
          <div key={generateKey(idx)} className={'uil-radio-option'}>
            <label className={'uil-radio uil-check'}>
              <input
                name={option.label}
                type={'radio'}
                value={option.value}
                checked={value === option.value || value === '' && option.checked}
                onChange={() => handleRadioChange(option.value)}
                disabled={disabled? disabled : option.disabled}
              />
              <div className={'uil-checkmark uil-radio-check'} style={{backgroundColor: checkColor}}/>
            </label>

            <span className={'uil-font-base'}>{option.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}