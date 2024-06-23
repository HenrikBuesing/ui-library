import React from 'react';
import {BaseModal} from './baseModal';
import {ModalType} from 'enums/ModalType';

export interface INotifyModal {
  closeLabel: string;
  isSuccess : boolean;
  message   : string | string[];
  title     : string;
  timeout?  : number;
}

export function NotifyModal(props: INotifyModal) {
  const {
    isSuccess,
    ...modalProps
  } = props;

  return (
    <BaseModal type={isSuccess? ModalType.success : ModalType.error} {...modalProps}/>
  );
}