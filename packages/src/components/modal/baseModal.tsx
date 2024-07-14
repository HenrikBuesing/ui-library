import React, {useEffect, useRef} from 'react';
import {ModalType} from 'enums/modalType';
import {CustomButton} from 'components/button/customButton';
import useInjectStyleSheet from "utils/useInjectStyles";

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

  const nodeRef = useRef<HTMLDivElement>(null);
  useInjectStyleSheet(nodeRef);

  useEffect(() => {
    if (!timeout) return;

    const t = setTimeout(() => {
      return callback ? callback() : close();
    }, timeout);

    return () => clearTimeout(t);
  },[]);

  function setHeaderClass() {
    switch (type) {
      case ModalType.error:
        return 'uil-header uil-error';
      case ModalType.success:
        return 'uil-header uil-success';
      case ModalType.warning:
        return 'uil-header uil-warning';
      default:
        return 'uil-header';
    }
  }

  //run callback if timeout and callback are set
  function handleClose() {
    timeout && callback ? callback() : close();
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
              message.map((m, idx) => <p key={idx} className={'uil-modal-text'}>{m}</p>)
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