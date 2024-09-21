import React, {useState} from 'react';
import {CustomRadio, CustomCheckbox} from "../../uil-bundle/bundle.js";
import {RadioOption} from "../../uil-bundle";

const options: RadioOption[] = [
  {value: 'option-a', label: 'option-a'},
  {value: 'option-b', label: 'option-b'},
  {value: 'option-c', label: 'option-c'},
  {value: 'option-d', label: 'option-d', disabled: true},
];

export default function RadioExample() {
  const [value, setValue] = useState<string>('');

  return (
    <CustomRadio options={options} value={value} valueChanged={setValue}/>
  );
}

export function RadioLabel() {
  const [value, setValue] = useState<string>('');

  return (
    <CustomRadio options={options} value={value} valueChanged={setValue} label={'Label property'}/>
  );
}

export function RadioColor() {
  const [value, setValue] = useState<string>('');

  return (
    <CustomRadio options={options} value={value} valueChanged={setValue} checkColor={'red'}/>
  );
}

export function RadioDisabled() {
  const [value, setValue] = useState<string>('');

  return (
    <CustomRadio options={options} value={value} valueChanged={setValue} disabled={true}/>
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