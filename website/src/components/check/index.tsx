import React, {useState} from 'react';
import {Radio, Checkbox} from "@site/src/uil-bundle";
import {RadioOption} from "../../uil-bundle";

export default function RadioExample() {
  const options: RadioOption[] = [
    {value: 'option-a', name: 'option-a'},
    {value: 'option-b', name: 'option-b'},
    {value: 'option-c', name: 'option-c'},
    {value: 'option-d', name: 'option-d', disabled: true},
  ];

  const [value, setValue] = useState<string>('');

  return (
    <Radio options={options} value={value} valueChanged={setValue}/>
  );
}

export function RadioExampleDark() {
  const options: RadioOption[] = [
    {value: 'option-a-dark', name: 'option-a-dark'},
    {value: 'option-b-dark', name: 'option-b-dark'},
    {value: 'option-c-dark', name: 'option-c-dark'},
    {value: 'option-d-dark', name: 'option-d-dark', disabled: true},
  ];

  const [value, setValue] = useState<string>('');

  return (
    <Radio options={options} value={value} valueChanged={setValue} dark={true}/>
  );
}

export function RadioColor() {
  const optionsC: RadioOption[] = [
    {value: 'option-i', name: 'option-i'},
    {value: 'option-j', name: 'option-j'},
    {value: 'option-k', name: 'option-k'},
    {value: 'option-l', name: 'option-l', disabled: true},
  ];

  const [value, setValue] = useState<string>('');

  return (
    <Radio options={optionsC} value={value} valueChanged={setValue} color={'red'}/>
  );
}

export function RadioColorDark() {
  const optionsC: RadioOption[] = [
    {value: 'option-i-dark', name: 'option-i-dark'},
    {value: 'option-j-dark', name: 'option-j-dark'},
    {value: 'option-k-dark', name: 'option-k-dark'},
    {value: 'option-l-dark', name: 'option-l-dark', disabled: true},
  ];

  const [value, setValue] = useState<string>('');

  return (
    <Radio options={optionsC} value={value} valueChanged={setValue} color={'red'} dark={true}/>
  );
}

export function RadioDisabled() {
  const optionsD: RadioOption[] = [
    {value: 'option-m', name: 'option-m'},
    {value: 'option-n', name: 'option-n'},
    {value: 'option-o', name: 'option-o'},
    {value: 'option-p', name: 'option-p', disabled: true},
  ];

  const [value, setValue] = useState<string>('');

  return (
    <Radio options={optionsD} value={value} valueChanged={setValue} disabled={true}/>
  );
}

export function RadioDisabledDark() {
  const optionsD: RadioOption[] = [
    {value: 'option-m-dark', name: 'option-m-dark'},
    {value: 'option-n-dark', name: 'option-n-dark'},
    {value: 'option-o-dark', name: 'option-o-dark'},
    {value: 'option-p-dark', name: 'option-p-dark', disabled: true},
  ];

  const [value, setValue] = useState<string>('');

  return (
    <Radio options={optionsD} value={value} valueChanged={setValue} disabled={true} dark={true}/>
  );
}

export function CheckboxLabel() {
  const [value, setValue] = useState(false);

  return (
    <div style={{backgroundColor: '#ffffff', padding: '1rem'}}>
      <Checkbox checked={value} toggleCheck={setValue} label={'light checkbox'} name={'check-with-label'}/>
    </div>
  );
}

export function CheckboxLabelDark() {
  const [value, setValue] = useState(false);

  return (
    <div style={{backgroundColor: '#222222', padding: '1rem'}}>
      <Checkbox checked={value} toggleCheck={setValue} label={'dark checkbox'} name={'check-with-label-dark'} dark={true}/>
    </div>
  );
}

export function CheckboxColor() {
  const [value, setValue] = useState(false);

  return (
    <div style={{backgroundColor: '#ffffff', padding: '1rem'}}>
      <Checkbox checked={value} toggleCheck={setValue} label={'Custom check Color'} color={'red'} name={'check-with-custom-color'}/>
    </div>
  );
}

export function CheckboxColorDark() {
  const [value, setValue] = useState(false);

  return (
    <div style={{backgroundColor: '#222222', padding: '1rem'}}>
      <Checkbox checked={value} toggleCheck={setValue} label={'Custom check Color dark'} color={'red'} name={'check-with-custom-color-dark'} dark={true}/>
    </div>
  );
}

export function CheckboxBody() {
  const [value, setValue] = useState(false);

  return (
    <div style={{backgroundColor:'#ffffff', padding: '1rem'}}>
      <Checkbox checked={value} toggleCheck={setValue} name={'check-with-custom-label'}>
        <span>You can provide html elements as a label alternative with <a href={'/docs/components/checkbox#custom-content'}>links</a></span>
      </Checkbox>
    </div>
  );
}

export function CheckboxBodyDark() {
  const [value, setValue] = useState(false);

  return (
    <div style={{backgroundColor:'#222222', padding: '1rem'}}>
      <Checkbox checked={value} toggleCheck={setValue} name={'check-with-custom-label-dark'} dark={true}>
        <span>You can provide html elements as a label alternative with <a href={'/docs/components/checkbox#custom-content'}>links</a></span>
      </Checkbox>
    </div>
  );
}

export function CheckboxDisabled() {
  const [value, setValue] = useState(false);

  return (
    <div style={{backgroundColor:'#ffffff', padding: '1rem'}}>
      <Checkbox checked={value} toggleCheck={setValue} name={'check-disabled'} disabled={true} label={'disabled light'}/>
    </div>
  );
}

export function CheckboxDisabledDark() {
  const [value, setValue] = useState(false);

  return (
    <div style={{backgroundColor:'#222222', padding: '1rem'}}>
      <Checkbox checked={value} toggleCheck={setValue} name={'check-disabled-dark'} dark={true} disabled={true} label={'disabled dark'}/>
    </div>
  );
}