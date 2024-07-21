import React, {useState} from 'react';
import {CustomRadio} from "../../uil-bundle/bundle.mjs";
import {RadioOption} from "../../uil-bundle";

export default function RadioExample() {
  const [value, setValue] = useState<string>('');
  const options: RadioOption[] = [
    {value: 'first', label: 'First'},
    {value: 'second', label: 'Second'}
  ];

  return(
    <CustomRadio options={options} value={value} valueChanged={setValue}/>
  );
}