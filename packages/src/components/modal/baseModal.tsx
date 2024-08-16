import React, {useEffect, useRef} from 'react';
import {ModalType} from 'enums/modalType';
import {CustomButton} from 'components/button/customButton';
import useInjectStyleSheet from 'utils/useInjectStyles';
import generateKey from 'utils/generateKey';

interface IBaseModal {
  close        : () => void;
  message      : string | string[];
  title        : string;
  type         : ModalType;
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
  const nodeRef = useRef<HTMLDivElement>(null);
  useInjectStyleSheet(nodeRef);

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
      case ModalType.error:
        return `${base} uil-error`;
      case ModalType.success:
        return `${base} uil-success`;
      case ModalType.warning:
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
    <div className={'uil-modal-wrapper'} ref={nodeRef}>
      <div className={'uil-modal'}>
        <div className={setHeaderClass()}>
          {title}
        </div>

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

          <div className={`uil-button-wrapper ${type !== ModalType.question ? 'uil-single' : ''}`}>
            {type !== ModalType.question &&
              <CustomButton label={closeLabel?? ''} onClick={handleClose} type={'button'}/>
            }

            {type == ModalType.question && props.confirm &&
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