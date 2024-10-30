import React, { useState } from 'react';
import { NotifyModal, QuestionModal, CustomButton } from '@site/src/uil-bundle';

export default function SuccessModal() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <CustomButton label={'show success'} theme={'success'} onClick={() => setModalVis(true)} />

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
      <CustomButton label={'show warning'} theme={'warning'} onClick={() => setModalVis(true)} />

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
      <CustomButton label={'show error'} theme={'error'} onClick={() => setModalVis(true)} />

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
      <CustomButton label={'show modal'} onClick={() => setModalVis(true)} />

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
      <CustomButton label={'show timeout modal'} onClick={() => setModalVis(true)} />

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
      <CustomButton label={'show question modal'} onClick={() => setModalVis(true)} />

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