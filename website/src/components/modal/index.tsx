import React, { useState } from 'react';
import { NotifyModal, QuestionModal, Button} from '@site/src/uil-bundle';

export default function SuccessModal() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} label={'show success'} color={'success'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <NotifyModal title={'Success'} message={'This is a success message'} close={() => setModalVis(false)} closeLabel={'close'} modalType={'success'} />
      }
    </>
  );
}

export function WarningModal() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} label={'show warning'} color={'warning'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <NotifyModal title={'Warning'} message={'This is a warning message'} close={() => setModalVis(false)} closeLabel={'close'} modalType={'warning'} />
      }
    </>
  );
}

export function ErrorModal() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} label={'show error'} color={'error'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <NotifyModal title={'Error'} message={'This is an error'} close={() => setModalVis(false)} closeLabel={'close'} modalType={'error'} />
      }
    </>
  );
}

export function MultiLineModal() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} color={'success'} label={'show modal'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <NotifyModal title={'Multiple messages'} message={['first string', 'this is a second text', 'Each string is wrapped in a paragraph']} close={() => setModalVis(false)} closeLabel={'close'} modalType={'success'} />
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
      <Button buttonType={'secondary'} color={'success'} label={'show timeout modal'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <NotifyModal title={'Modal with timeout'} message={'Display an alert after 3 second timeout'} close={() => setModalVis(false)} closeLabel={'close'} modalType={'success'} timeout={3000} callback={alertTimeout}/>
      }
    </div>
  );
}

export function QuestionExample() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} color={'success'} label={'show question modal'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <QuestionModal
          title={'Question title'}
          message={['Confirm to display an alert', 'cancel to close this modal']}
          cancel={() => setModalVis(false)}
          cancelLabel={'cancel'}
          confirm={() => alert('Hello!')}
          confirmLabel={'confirm'}
        />
      }
    </>
  );
}