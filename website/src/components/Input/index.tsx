import React, {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {PasswordRuleTypes, CustomInput, PasswordInput} from "@site/src/uil-bundle/bundle.mjs";
import {PasswordRule} from "@site/src/uil-bundle";

export default function DefaultInput() {
  const [value, setValue] = useState('');

  return (
    <CustomInput label={'Label'} value={value} valueChanged={setValue} name={'input-name'} />
  );
}

export function DisabledInput() {
  const [value, setValue] = useState('you can still set a value');

  return (
    <CustomInput label={'Label'} value={value} valueChanged={setValue} disabled={true} name={'disabled-input'}/>
  );
}

export function IconInput() {
  const [value, setValue] = useState('');

  return (
    <CustomInput label={'Label'} value={value} valueChanged={setValue} iconSrc={useBaseUrl('/img/example.svg#eyeOpen')} name={'icon-input'}/>
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
      name={'tooltip-input'}
    />
  );
}

export function PasswordExample() {
  const [password, setPassword] = useState('');
  const [passVis, setPassVis] = useState(false);

  const rules: PasswordRule[] = [
    {label: 'include 1 number', count: 1, type: PasswordRuleTypes.numbers},
    {label: 'min length 6', count: 6, type: PasswordRuleTypes.minLength},
    {label: 'include 1 special char', count: 1, type: PasswordRuleTypes.special},
    {label: '1 uppercase', count: 1, type: PasswordRuleTypes.upper},
  ];

  return (
    <PasswordInput
      label={'New password'}
      type={passVis? 'text' : 'password'}
      toggle={() => {setPassVis(!passVis)}}
      value={password}
      valueChanged={setPassword}
      rules={rules}
      ruleChecked={useBaseUrl('/img/example.svg#check')}
      ruleUnchecked={useBaseUrl('/img/example.svg#uncheck')}
      // setFailedRules={setFailedRules}
      iconSrc={`/icons/sprites.svg#${passVis? 'eyeSlash' : 'eyeOpen'}`}
      required={true}
      autoComplete={'new-password'}
      name={'password'}
      // capsLockWarning={'caps lock warning'}
      // tooltipClose={t('controls.close')}
      // tooltipIcon={'/icons/sprites.svg#question'}
      // tooltipText={t('controls.tooltips.password-new')}
    />
  );
}