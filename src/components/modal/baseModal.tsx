import React, {useEffect, useState} from 'react';
import {ModalType} from 'enums/ModalType';
import {CustomButton} from 'components/button/customButton';
import './modal.scss';

interface IBaseModal {
  message      : string | string[];
  title        : string;
  type         : ModalType;
  cancelLabel? : string;
  closeLabel?  : string;
  confirm?     : () => void;
  confirmLabel?: string;
  timeout?     : number;
}

export function BaseModal(props: IBaseModal) {
  const {
    cancelLabel = '',
    closeLabel,
    confirm,
    confirmLabel = '',
    message,
    timeout,
    title,
    type
  } = props;

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!timeout) return;

    setTimeout(() => {
      setVisible(false);
    }, timeout);
  },[]);

  return (visible ?
    <div className={'uil-modal-wrapper'}>
      <div className={'uil-modal'}>
        <div className={`uil-header ${type == ModalType.success ? 'uil-success' : ''} ${type == ModalType.error ? 'uil-error' : ''}`}>
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
              message.map((m, idx) =>
                <p key={idx} className={'uil-modal-text'}>{m}</p>
              ) : <p className={'uil-modal-text'}>{message}</p>
            }
          </div>

          <div className={`uil-button-wrapper ${type !== ModalType.question ? 'uil-single' : ''}`}>
            {type !== ModalType.question &&
              <CustomButton label={closeLabel?? ''} small={true} onClick={() => setVisible(false)} type={'button'}/>
            }

            {type == ModalType.question && props.confirm &&
              <>
                <CustomButton label={confirmLabel} theme={'#00416A'} small={true} onClick={() => confirm} type={'button'}/>
                <CustomButton label={cancelLabel} small={true} onClick={() => setVisible(false)} type={'button'}/>
              </>
            }
          </div>
        </div>
      </div>
    </div> : <></>
  );
}