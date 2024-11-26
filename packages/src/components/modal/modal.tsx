import React, {useEffect} from 'react';
import generateKey from 'utils/generateKey';
import type {ModalProps} from './types';
import {Button} from '../button';
import style from './modal.module.scss';

export function Modal(props: ModalProps) {
  const {
    cancelAction,
    cancelLabel = '',
    children,
    confirmAction,
    confirmLabel = '',
    dark = false,
    message,
    timeout,
    title,
    theme,
    type
  } = props;

  const messages = Array.isArray(message) ? message : [message];
  const isNotification = type === 'notification';
  let timer: NodeJS.Timeout | undefined = undefined;

  useEffect(() => {
    if (!timeout || !confirmAction) return;

    timer = setTimeout(() => {
      return confirmAction();
    }, timeout);

    return () => {clearTimeout(timer)};
  },[]);

  function handleConfirm() {
    if (!confirmAction) return;

    clearTimeout(timer);

    return confirmAction();
  }

  return (
    <div className={style.modalWrapper}>
      <div className={`${style.modal}${dark ? ` ${style.dark}` : ''}`}>
        <div className={`${style.header}${theme ? ` ${style[theme]}` : ''}`}>{title}</div>

        {timeout &&
          <div className={style.progressWrapper}>
            <div className={style.progressBar} style={{animationDuration: `${(timeout / 1000) + .5}s`}}/>
          </div>
        }

        <div className={`${style.content}${dark ? ` ${style.dark}` : ''}`}>
          {children ? children :
            <>
              <div>
                {messages.map(m =>
                  <p key={generateKey()} className={style.modalText}>{m}</p>
                )}
              </div>

              <div className={`${style.buttonWrapper}${isNotification ? ` ${style.single}` : ''}`}>
                <Button variant={'primary'} label={confirmLabel} color={theme ?? '#00416A'} onClick={handleConfirm} type={'button'} dark={dark}/>

                {!isNotification &&
                  <Button variant={'secondary'} label={cancelLabel} onClick={cancelAction} type={'button'} dark={dark}/>
                }
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
}