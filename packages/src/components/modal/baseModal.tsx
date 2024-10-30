import React, {useEffect} from 'react';
import {CustomButton} from 'components/button/customButton';
import generateKey from 'utils/generateKey';

interface IBaseModal {
  close        : () => void;
  message      : string | string[];
  title        : string;
  type         : 'success' | 'warning' | 'error' | 'question';
  callback?    : (() => void) | undefined;
  cancelLabel? : string;
  closeLabel?  : string;
  confirm?     : () => void;
  confirmLabel?: string;
  timeout?     : number;
}

export function BaseModal(props: IBaseModal) {
  const {
    callback,
    cancelLabel = '',
    close,
    closeLabel,
    confirm,
    confirmLabel = '',
    message,
    timeout,
    title,
    type
  } = props;

  let timer: NodeJS.Timeout | undefined = undefined;

  useEffect(() => {
    if (!timeout) return;

    timer = setTimeout(() => {
      return callback ? callback() : close();
    }, timeout);

    return () => {clearTimeout(timer)};
  },[]);

  function setHeaderClass() {
    const base = 'uil-header';

    switch (type) {
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

    //run callback if timeout and callback are set, otherwise close
    if (timeout && callback) {
      return callback();
    }

    return close();
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
            {Array.isArray(message) ?
              message.map((m, idx) => <p key={generateKey(idx)} className={'uil-modal-text'}>{m}</p>)
              : <p className={'uil-modal-text'}>{message}</p>
            }
          </div>

          <div className={`uil-button-wrapper ${type !== 'question' ? 'uil-single' : ''}`}>
            {type !== 'question' &&
              <CustomButton label={closeLabel?? ''} onClick={handleClose} type={'button'}/>
            }

            {type == 'question' && props.confirm &&
              <>
                <CustomButton label={confirmLabel} theme={'#00416A'} onClick={confirm} type={'button'}/>
                <CustomButton label={cancelLabel} onClick={close} type={'button'}/>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}