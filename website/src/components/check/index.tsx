import React, {useState} from 'react';
import {CustomRadio, CustomCheckbox} from "@site/src/uil-bundle";
import {RadioOption} from "../../uil-bundle";

export default function RadioExample() {
  const options: RadioOption[] = [
    {value: 'option-a', label: 'option-a', checked: true},
    {value: 'option-b', label: 'option-b'},
    {value: 'option-c', label: 'option-c'},
    {value: 'option-d', label: 'option-d', disabled: true},
  ];

  const [value, setValue] = useState<string>('');

  return (
    <CustomRadio options={options} value={value} valueChanged={setValue}/>
  );
}

export function RadioLabel() {
  const optionsB: RadioOption[] = [
    {value: 'option-e', label: 'option-e'},
    {value: 'option-f', label: 'option-f'},
    {value: 'option-g', label: 'option-g'},
    {value: 'option-h', label: 'option-h', disabled: true},
  ];

  const [value, setValue] = useState<string>('');

  return (
    <CustomRadio options={optionsB} value={value} valueChanged={setValue} label={'Label property'}/>
  );
}

export function RadioColor() {
  const optionsC: RadioOption[] = [
    {value: 'option-i', label: 'option-i'},
    {value: 'option-j', label: 'option-j'},
    {value: 'option-k', label: 'option-k'},
    {value: 'option-l', label: 'option-l', disabled: true},
  ];

  const [value, setValue] = useState<string>('');

  return (
    <CustomRadio options={optionsC} value={value} valueChanged={setValue} checkColor={'red'}/>
  );
}

export function RadioDisabled() {
  const optionsD: RadioOption[] = [
    {value: 'option-m', label: 'option-m'},
    {value: 'option-n', label: 'option-n'},
    {value: 'option-o', label: 'option-o'},
    {value: 'option-p', label: 'option-p', disabled: true},
  ];

  const [value, setValue] = useState<string>('');

  return (
    <CustomRadio options={optionsD} value={value} valueChanged={setValue} disabled={true}/>
  );
}

export function CheckboxLabel() {
  const [value, setValue] = useState(false);

  return (
    <CustomCheckbox checked={value} toggleCheck={setValue} label={'label property'} name={'check-with-label'}/>
  );
}

export function CheckboxColor() {
  const [value, setValue] = useState(false);

  return (
    <CustomCheckbox checked={value} toggleCheck={setValue} label={'Custom check Color'} checkColor={'red'} name={'check-with-custom-color'}/>
  );
}

export function CheckboxBody() {
  const [value, setValue] = useState(false);

  return (
    <CustomCheckbox checked={value} toggleCheck={setValue} name={'check-with-custom-label'}>
      <div>
        <span>You can provide html elements as a label alternative</span>
      </div>
    </CustomCheckbox>
  );
}