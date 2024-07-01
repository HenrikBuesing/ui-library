import React from 'react';

interface ICustomRadio {
  label?       : string;
  options      : RadioOption[];
  selectedValue: string;
  valueChanged : (value: string) => void
}

interface RadioOption {
  label: string;
  value: string;
}

export function CustomRadio(props: ICustomRadio) {
  const {
    label,
    options,
    selectedValue,
    valueChanged
  } = props;

  function handleRadioChange(value: string) {
    if (selectedValue === value) return;

    valueChanged(value);
  }

  return (
    <div>
      {label && <label>{label}</label>}

      {options.map((option, idx) =>
        <>
          <input
            key={idx}
            id={`radio-${idx}`}
            type={'radio'}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleRadioChange(option.value)}
          />

          <label key={idx} htmlFor={`radio-${idx}`}>{option.label}</label>
        </>
      )}
    </div>
  );
}