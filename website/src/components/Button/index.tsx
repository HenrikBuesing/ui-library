import React from 'react';
import { CustomButton } from '../../../../packages/dist/index';

export default function ButtonShowcase() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem'}}>
      <CustomButton label={'Default'} type={'button'} onClick={() => alert('You clicked me!')}/>

      <CustomButton label={'Themed'} theme={'#0047CC'} type={'button'} onClick={() => alert('You clicked me!')}/>

      <CustomButton label={'Disabled'} disabled={true} type={'button'} onClick={() => alert('You clicked me!')}/>

      <CustomButton label={'Default small'} small={true} type={'button'} onClick={() => alert('You clicked me!')}/>

      <CustomButton label={'Themed small'} small={true} theme={'#0047CC'} type={'button'} onClick={() => alert('You clicked me!')}/>

      <CustomButton label={'Disabled small'} small={true} disabled={true} type={'button'} onClick={() => alert('You clicked me!')}/>

      <CustomButton label={'Success'} theme={'success'} type={'button'} onClick={() => alert('You clicked me!')}/>

      <CustomButton label={'Warning'} theme={'warning'} type={'button'} onClick={() => alert('You clicked me!')}/>

      <CustomButton label={'Error'} theme={'error'} type={'button'} onClick={() => alert('You clicked me!')}/>
    </div>
  );
}