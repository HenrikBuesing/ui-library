import React, {type ReactNode, useEffect} from 'react';
import generateKey from 'utils/generateKey';
import {Button} from "../button";
import style from './modal.module.scss';

interface BaseProps {
  title : string;
  dark? : boolean;
  theme?: 'success' | 'warning' | 'error';
}

interface BaseModal extends BaseProps {
  action   : () => void;
  children?: never;
  message  : string | string[];
}

interface CustomModal extends BaseProps {
  action?  : never;
  children : ReactNode;
  message? : never;
}

type Modal = BaseModal | CustomModal;

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

  function handleClose() {
    if (!action) return

    clearTimeout(timer);

    return action();
  }

  return (
    <div className={style.modalWrapper}>
      <div className={`${style.modal} ${dark ? style.dark : ''}`}>
        <div className={`${theme ? `${style.header} ${style[theme]}` : style.header}`}>{title}</div>

        {timeout &&
          <div className={style.progressWrapper}>
            <div className={style.progressBar} style={{animationDuration: `${(timeout / 1000) + .5}s`}}/>
          </div>
        }

        <div className={`${style.content} ${dark ? style.dark : ''}`}>
          {children ? children :
            <>
              <div>
                {Array.isArray(message) ?
                  message.map(m => <p key={generateKey()} className={style.modalText}>{m}</p>)
                  : <p className={style.modalText}>{message}</p>
                }
              </div>

              <div className={`${style.buttonWrapper} ${type === 'notification' ? style.single : ''}`}>
                {type === 'notification' ?
                  <Button label={buttonLabel} onClick={handleClose} type={'button'} variant={'secondary'} dark={dark}/> :

                  <>
                    <Button variant={'primary'} label={confirmLabel} color={theme ?? '#00416A'} onClick={action} type={'button'} dark={dark}/>
                    <Button variant={'secondary'} label={cancelLabel} onClick={cancelAction} type={'button'} dark={dark}/>
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