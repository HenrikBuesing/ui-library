import React, {ComponentPropsWithoutRef, useEffect, useRef} from 'react';
import generateKey from 'utils/generateKey';
import useInjectStyleSheet from "utils/useInjectStyles";

interface ICustomRadio extends ComponentPropsWithoutRef<'input'> {
  options     : RadioOption[];
  value       : string;
  valueChanged: (value: string) => void;
  checkColor? : string;
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
    label,
    options,
    value,
    valueChanged,
    ...inputProps
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
                disabled={option.disabled}
                {...inputProps}
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