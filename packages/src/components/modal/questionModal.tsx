import React from 'react';
import {BaseModal} from './baseModal';
import {ModalType} from 'enums/modalType';

export interface IQuestionModal {
  cancel      : () => void;
  cancelLabel : string;
  confirm     : () => void;
  confirmLabel: string;
  message     : string | string[];
  title       : string;
}

export function QuestionModal(props: IQuestionModal) {
  const {
    cancel,
    ...modalProps
  } = props;

  return (
    <BaseModal type={ModalType.question} close={cancel} {...modalProps}/>
  );
}