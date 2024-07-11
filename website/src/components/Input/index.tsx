import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {CustomInput} from '../../uil-bundle/ui-library.modern.mjs';

export default function IconInput() {
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
      tooltipIcon={useBaseUrl('/img/example.svg#eyeOpen')}
      tooltipText={'This is a tooltip text. You can click anywhere on the screen to dismiss'}
      tooltipClose={'optional close label'}
    />
  );
}