import React, {ReactNode, useEffect} from 'react';
import generateKey from 'utils/generateKey';
import {Button} from "../button";

interface BaseProps {
  title : string;
  dark? : boolean;
  theme?: 'success' | 'warning' | 'error';
}

interface ModalNoHTML extends BaseProps {
  action   : () => void;
  children?: never;
  message  : string | string[];
}

interface ModalHTML extends BaseProps {
  action?  : never;
  children : ReactNode;
  message? : never;
}

type Modal = ModalNoHTML | ModalHTML;

interface Notification {
  type         : 'notification';
  buttonLabel? : string;
  cancelAction?: never;
  cancelLabel ?: never;
  confirmLabel?: never;
  timeout?     : number;
}

interface Question {
  type         : 'question';
  buttonLabel? : never;
  cancelAction?: () => void;
  cancelLabel? : string;
  confirmLabel?: string;
  timeout?     : never;
}

export function Modal(props: Modal & (Notification | Question)) {
  const {
    action,
    buttonLabel = '',
    cancelAction,
    cancelLabel = '',
    children,
    confirmLabel = '',
    dark = false,
    message,
    timeout,
    title,
    theme,
    type
  } = props;

  let timer: NodeJS.Timeout | undefined = undefined;

  useEffect(() => {
    if (!timeout || !action) return;

    timer = setTimeout(() => {
      return action();
    }, timeout);

    return () => {clearTimeout(timer)};
  },[]);

  function setHeaderClass() {
    const base = 'uil-header';

    switch (theme) {
      case 'error':
        return `${base} uil-error`;
      case 'success':
        return `${base} uil-success`;
      case 'warning':
        return `${base} uil-warning`;
      default:
        return base;
    }
  }

  function handleClose() {
    if (!action) return

    clearTimeout(timer);

    return action();
  }

  return (
    <div className={'uil-modal-wrapper'}>
      <div className={`uil-modal ${dark ? 'dark' : ''}`}>
        <div className={setHeaderClass()}>{title}</div>

        {timeout &&
          <div className={'uil-progress-wrapper'}>
            <div className={'uil-progress-bar'} style={{animationDuration: `${(timeout / 1000) + .5}s`}}/>
          </div>
        }

        <div className={`uil-content ${dark ? 'dark' : ''}`}>
          {children ? children :
            <>
              <div>
                {Array.isArray(message) ?
                  message.map((m, idx) => <p key={generateKey(idx)} className={'uil-modal-text'}>{m}</p>)
                  : <p className={'uil-modal-text'}>{message}</p>
                }
              </div>

              <div className={`uil-button-wrapper ${type === 'notification' ? 'uil-single' : ''}`}>
                {type === 'notification' ?
                  <Button label={buttonLabel} onClick={handleClose} type={'button'} buttonType={'secondary'} dark={dark}/> :

                  <>
                    <Button buttonType={'primary'} label={confirmLabel} theme={theme ?? '#00416A'} onClick={action} type={'button'} dark={dark}/>
                    <Button buttonType={'secondary'} label={cancelLabel} onClick={cancelAction} type={'button'} dark={dark}/>
                  </>
                }
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
}