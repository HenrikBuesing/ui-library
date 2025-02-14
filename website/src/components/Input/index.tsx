import React, {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {Input, Icon} from "@site/src/uil-bundle";

export default function DefaultInput() {
  const [value, setValue] = useState('');

  return (
    <>
      <Input label={'Outlined'} variant={'outlined'} value={value} onChange={e => setValue(e.target.value)}>
        {/*<Icon type={'svg'} src={useBaseUrl('/img/example.svg#question')}/>*/}
      </Input>

      <Input label={'Username'} variant={'basic'} value={value} onChange={e => setValue(e.target.value)}>
        {/*<Icon type={'svg'} src={useBaseUrl('/img/example.svg#question')}/>*/}
      </Input>
    </>
  );
}

// export function DisabledInput() {
//   const [value, setValue] = useState('you can still set a value');
//
//   return (
//     <CustomInput label={'Label'} value={value} valueChanged={setValue} disabled={true} name={'disabled-input'}/>
//   );
// }
//
// export function IconInput() {
//   const [value, setValue] = useState('');
//
//   return (
//     <CustomInput label={'Label'} value={value} valueChanged={setValue} iconSrc={useBaseUrl('/img/example.svg#eyeOpen')} name={'icon-input'}/>
//   );
// }
//
// export function TooltipInput() {
//   const [value, setValue] = useState('');
//
//   return (
//
//     <CustomInput
//       label={'Label'}
//       value={value}
//       valueChanged={setValue}
//       tooltipIcon={useBaseUrl('/img/example.svg#question')}
//       tooltipText={'This is a tooltip text. You can click anywhere on the screen to dismiss'}
//       tooltipClose={'optional close label'}
//       name={'tooltip-input'}
//     />
//   );
// }
//
// const rules: PasswordRule[] = [
//   {label: '1 number', count: 1, type: 'numbers'},
//   {label: 'min length 6 characters', count: 6, type: 'minLength'},
//   {label: '1 special character', count: 1, type: 'special'},
//   {label: '1 uppercase', count: 1, type: 'upper'},
// ];
//
// export function PasswordExample() {
//   const [password, setPassword] = useState('');
//
//   return (
//     <PasswordInput
//       label={'New password'}
//       type={'password'}
//       value={password}
//       valueChanged={setPassword}
//       rules={rules}
//       ruleChecked={useBaseUrl('/img/example.svg#check')}
//       ruleUnchecked={useBaseUrl('/img/example.svg#uncheck')}
//       name={'password'}
//     />
//   );
// }
//
// export function PasswordToggle() {
//   const [password, setPassword] = useState('');
//   const [passVis, setPassVis] = useState(false);
//
//   return (
//     <PasswordInput
//       label={'New password'}
//       type={passVis? 'text' : 'password'}
//       toggle={() => {setPassVis(!passVis)}}
//       value={password}
//       valueChanged={setPassword}
//       rules={rules}
//       ruleChecked={useBaseUrl('/img/example.svg#check')}
//       ruleUnchecked={useBaseUrl('/img/example.svg#uncheck')}
//       iconSrc={useBaseUrl(`/img/example.svg#${passVis? 'eyeSlash' : 'eyeOpen'}`)}
//       name={'password-toggle'}
//     />
//   );
// }
//
// export function PasswordTooltip() {
//   const [password, setPassword] = useState('');
//   const [passVis, setPassVis] = useState(false);
//
//   return (
//     <PasswordInput
//       label={'New password'}
//       type={passVis? 'text' : 'password'}
//       toggle={() => {setPassVis(!passVis)}}
//       value={password}
//       valueChanged={setPassword}
//       rules={rules}
//       ruleChecked={useBaseUrl('/img/example.svg#check')}
//       ruleUnchecked={useBaseUrl('/img/example.svg#uncheck')}
//       iconSrc={useBaseUrl(`/img/example.svg#${passVis? 'eyeSlash' : 'eyeOpen'}`)}
//       name={'password-tooltip'}
//       tooltipIcon={useBaseUrl('/img/example.svg#question')}
//       tooltipText={'This is a tooltip text. You can click anywhere on the screen to dismiss'}
//       tooltipClose={'optional close label'}
//     />
//   );
// }
//
// export function PasswordCaps() {
//   const [password, setPassword] = useState('');
//
//   return (
//     <PasswordInput
//       label={'New password'}
//       type={'password'}
//       value={password}
//       valueChanged={setPassword}
//       rules={rules}
//       ruleChecked={useBaseUrl('/img/example.svg#check')}
//       ruleUnchecked={useBaseUrl('/img/example.svg#uncheck')}
//       name={'password-caps'}
//       capsLockWarning={'caps lock enabled'}
//     />
//   );
// }