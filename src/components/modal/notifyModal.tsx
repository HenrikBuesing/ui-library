import React from 'react';
import {BaseModal} from './baseModal';
import {ModalType} from 'enums/ModalType';

export interface INotifyModal {
  close     : () => void;
  closeLabel: string;
  modalType : 'success' | 'warning' | 'error';
  message   : string | string[];
  title     : string;
  callback? : (() => void) | undefined;
  timeout?  : number;
}

export function NotifyModal(props: INotifyModal) {
  const {
    callback,
    modalType,
    ...modalProps
  } = props;

  return (
    <BaseModal type={modalType as ModalType} {...modalProps} callback={callback}/>
  );
}