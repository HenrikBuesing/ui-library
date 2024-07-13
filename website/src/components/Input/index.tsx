import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {CustomInput} from '../../uil-bundle/ui-library.modern.mjs';

export default function DefaultInput() {
  const [value, setValue] = useState('');

  return (
    <CustomInput label={'Label'} value={value} valueChanged={setValue}/>
  );
}

export function DisabledInput() {
  const [value, setValue] = useState('you can still set a value');

  return (
    <CustomInput label={'Label'} value={value} valueChanged={setValue} disabled={true}/>
  );
}

export function IconInput() {
  const [value, setValue] = useState('');

  return (
    <CustomInput label={'Label'} value={value} valueChanged={setValue} iconSrc={useBaseUrl('/img/example.svg#eyeOpen')}/>
  );
}

export function TooltipInput() {
  const [value, setValue] = useState('');

  return (

    <CustomInput
      label={'Label'}
      value={value}
      valueChanged={setValue}
      tooltipIcon={useBaseUrl('/img/example.svg#question')}
      tooltipText={'This is a tooltip text. You can click anywhere on the screen to dismiss'}
      tooltipClose={'optional close label'}
    />
  );
}