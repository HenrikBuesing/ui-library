import React, { useState } from 'react';
import { Modal, Button} from '@site/src/uil-bundle';

export function NoTheme() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} label={'show modal'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <Modal type={'notification'} title={'No theme'} message={'This is a notification without a theme'} action={() => setModalVis(false)} buttonLabel={'close'}/>
      }
    </>
  );
}

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

export function CustomBody() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} label={'show custom modal'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <Modal type={'notification'} title={'custom modal content'} theme={'success'}>
          <div>
            <p>paragraph text</p>
            <div>you can also insert <a href={'/'}>links</a></div>
          </div>

          <div>
            <Button label={'close modal'} buttonType={'text'} onClick={() => setModalVis(false)}/>
          </div>
        </Modal>
      }
    </>
  );
}

export function DarkMode() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} label={'show dark modal'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <Modal type={'notification'} title={'Dark modal'} message={'This is the dark version of the modal.'} action={() => setModalVis(false)} buttonLabel={'close'} theme={'success'} dark={true}/>
      }
    </>
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

export function QuestionTheme() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} label={'show question modal'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <Modal
          type={'question'}
          title={'Question title'}
          theme={'success'}
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

export function QuestionCustom() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} label={'show question modal'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <Modal type={'question'} title={'Question title'}>
          <div>
            <p>paragraph text</p>
            <div>you can also insert <a href={'/'}>links</a></div>
          </div>

          <div>
            <Button label={'close modal'} buttonType={'text'} onClick={() => setModalVis(false)}/>
            <Button label={'alert'} buttonType={'secondary'} onClick={() => alert('modal alert')}/>
          </div>
        </Modal>
      }
    </>
  );
}

export function QuestionDark() {
  const [modalVis, setModalVis] = useState(false);

  return (
    <>
      <Button buttonType={'secondary'} label={'show question modal'} onClick={() => setModalVis(true)} />

      {modalVis &&
        <Modal
          dark={true}
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