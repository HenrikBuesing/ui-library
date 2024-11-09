import React, { useState } from 'react';
import { Modal, Button} from '@site/src/uil-bundle';

export default function SuccessModal() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} label={'show success'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <Modal type={'notification'} title={'Success'} message={'This is a success message'} action={() => setModalVis(false)} buttonLabel={'close'} theme={'success'} />
      }
    </>
  );
}

export function WarningModal() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} label={'show warning'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <Modal type={'notification'} title={'Warning'} message={'This is a warning message'} action={() => setModalVis(false)} buttonLabel={'close'} theme={'warning'} />
      }
    </>
  );
}

export function ErrorModal() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} label={'show error'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <Modal type={'notification'} title={'Error'} message={'This is an error'} action={() => setModalVis(false)} buttonLabel={'close'} theme={'error'} />
      }
    </>
  );
}

export function MultiLineModal() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} label={'show modal'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <Modal type={'notification'} title={'Multiple messages'} message={['first string', 'this is a second text', 'Each string is wrapped in a paragraph']} action={() => setModalVis(false)} buttonLabel={'close'} theme={'success'} />
      }
    </>
  );
}

export function CallbackModal() {
  const [modalVis, setModalVis] = useState(false);

  function alertTimeout() {
    alert('3 second timeout alert');
    setModalVis(false);
  }

  return (
    <div style={{marginBottom: '2rem'}}>
      <Button buttonType={'secondary'} label={'show timeout modal'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <Modal type={'notification'} title={'Modal with timeout'} message={'close after after 3 second timeout'} action={alertTimeout} buttonLabel={'close'} theme={'success'} timeout={3000}/>
      }
    </div>
  );
}

export function QuestionExample() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} label={'show question modal'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <Modal
          type={'question'}
          title={'Question title'}
          message={['Confirm to display an alert', 'cancel to close this modal']}
          cancelAction={() => setModalVis(false)}
          cancelLabel={'cancel'}
          action={() => alert('Hello!')}
          confirmLabel={'confirm'}
        />
      }
    </>
  );
}