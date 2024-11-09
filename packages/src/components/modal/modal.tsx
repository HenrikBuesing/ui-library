import React, {ReactNode, useEffect} from 'react';
import generateKey from 'utils/generateKey';
import {Button} from "../button";

interface Modal {
  action  : () => void;
  title   : string;
  timeout?: number;
  theme?  : 'success' | 'warning' | 'error';
}

interface BaseNotification {
  buttonLabel  : string;
  type         : 'notification';
  cancelAction?: never;
  cancelLabel ?: never;
  confirmLabel?: never;
}

interface BaseQuestion {
  cancelAction: () => void;
  cancelLabel : string;
  confirmLabel: string;
  type        : 'question';
  buttonLabel?: never;
}

interface HTMLBody {
  message?: never;
  children: ReactNode;
}

interface StringBody {
  message : string | string[];
  children?: never;
}

type Notification = BaseNotification & (HTMLBody | StringBody)
type Question = BaseQuestion & (HTMLBody | StringBody)

export function Modal(props: Modal & (Notification | Question)) {
  const {
    action,
    buttonLabel,
    cancelAction,
    cancelLabel = '',
    children,
    confirmLabel = '',
    message,
    timeout,
    title,
    theme,
    type
  } = props;

  let timer: NodeJS.Timeout | undefined = undefined;

  useEffect(() => {
    if (!timeout) return;

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
    clearTimeout(timer);

    return action();
  }

  return (
    <div className={'uil-modal-wrapper'}>
      <div className={'uil-modal'}>
        <div className={setHeaderClass()}>{title}</div>

        {timeout &&
          <div className={'uil-progress-wrapper'}>
            <div className={'uil-progress-bar'} style={{animationDuration: `${(timeout / 1000) + .5}s`}}/>
          </div>
        }

        <div className={'uil-content'}>
          <div>
            { message ?
              Array.isArray(message) ?
              message.map((m, idx) => <p key={generateKey(idx)} className={'uil-modal-text'}>{m}</p>)
              : <p className={'uil-modal-text'}>{message}</p> : children
            }
          </div>

          <div className={`uil-button-wrapper ${type === 'notification' ? 'uil-single' : ''}`}>
            {type === 'notification' &&
              <Button label={buttonLabel} onClick={handleClose} type={'button'} buttonType={'secondary'}/>
            }

            {type == 'question' &&
              <>
                <Button buttonType={'primary'} label={confirmLabel} theme={'#00416A'} onClick={action} type={'button'}/>
                <Button buttonType={'secondary'} label={cancelLabel} onClick={cancelAction} type={'button'}/>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}