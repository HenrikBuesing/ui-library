import React, {useState} from 'react';
import {CustomRadio, CustomCheckBox} from "../../uil-bundle/bundle.mjs";
import {RadioOption} from "../../uil-bundle";

export default function RadioExample() {
  const [value, setValue] = useState<string>('');
  const options: RadioOption[] = [
    {value: 'first', label: 'First'},
    {value: 'second', label: 'Second'}
  ];

  return (
    <CustomRadio options={options} value={value} valueChanged={setValue}/>
  );
}

export function CheckboxLabel() {
  const [value, setValue] = useState(false);

  return (
    <CustomCheckBox checked={value} toggleCheck={setValue} label={'label property'} name={'check-with-label'}/>
  );
}

export function CheckboxColor() {
  const [value, setValue] = useState(false);

  return (
    <CustomCheckBox checked={value} toggleCheck={setValue} label={'Custom check Color'} checkColor={'red'} name={'check-with-custom-color'}/>
  );
}

export function CheckboxBody() {
  const [value, setValue] = useState(false);

  return (
    <CustomCheckBox checked={value} toggleCheck={setValue} name={'check-with-custom-label'}>
      <div>
        <span>You can provide html elements as a label alternative</span>
      </div>
    </CustomCheckBox>
  );
}