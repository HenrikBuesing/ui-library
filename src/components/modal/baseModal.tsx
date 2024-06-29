import React, {useEffect} from 'react';
import {ModalType} from 'enums/ModalType';
import {CustomButton} from 'components/button/customButton';
import './modal.scss';

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

  useEffect(() => {
    if (!timeout) return;

    const t = setTimeout(() => {
      callback && callback();

      close();
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

  return (
    <div className={'uil-modal-wrapper'}>
      <div className={'uil-modal'}>
        <div className={setHeaderClass()}>
          {title}
        </div>

        {timeout &&
          <div className={'uil-progress-wrapper'}>
            <div className={'uil-progress-bar'} style={{animationDuration: `${(timeout / 1000) + 1}s`}}/>
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
              <CustomButton label={closeLabel?? ''} small={true} onClick={close} type={'button'}/>
            }

            {type == ModalType.question && props.confirm &&
              <>
                <CustomButton label={confirmLabel} theme={'#00416A'} small={true} onClick={confirm} type={'button'}/>
                <CustomButton label={cancelLabel} small={true} onClick={close} type={'button'}/>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}