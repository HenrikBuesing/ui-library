import generateKey from '@utils/generateKey';
import cls from '@utils/conditionalClass';
import type {ModalProps} from './types';
import style from './modal.module.scss';
import React from 'react';
import {Button} from '../button';

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
    variant
  } = props;

  let timer: NodeJS.Timeout | undefined = undefined;

  // useEffect(() => {
  //   if (!timeout || !confirmAction) return;
  //
  //   timer = setTimeout(() => {
  //     return confirmAction();
  //   }, timeout);
  //
  //   return () => {clearTimeout(timer)};
  // },[]);
  
  if (timeout) {
    timer = setTimeout(() => {
      return handleConfirm();
    }, timeout);
  }

  function handleConfirm() {
    if (!confirmAction) return;

    clearTimeout(timer);

    return confirmAction();
  }

  return (
    <div className={style.modalWrapper}>
      <div className={cls([style.modal, dark && style.dark])}>
        <div className={cls([style.header, theme && style[theme]])}>{title}</div>

        {timeout &&
          <div className={style.progressWrapper}>
            <div className={style.progressBar} style={{animationDuration: `${(timeout / 1000) + .5}s`}}/>
          </div>
        }

        <div className={cls([style.content, dark && style.dark])}>
          {children ??
            <>
              <div>
                {message?.map(m =>
                  <p key={generateKey()} className={style.modalText}>{m}</p>
                )}
              </div>

              <div className={cls([style.buttonWrapper, variant === 'notification' && style.single])}>
                <Button variant={'filled'} color={theme ?? '#00416A'} onClick={handleConfirm} type={'button'}>
                  {confirmLabel}
                </Button>

                {variant === 'question' &&
                  <Button variant={'outlined'} color={theme ?? '#00416A'} onClick={cancelAction} type={'button'}>
                    {cancelLabel}
                  </Button>
                }
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
}