import React from 'react';
import {BaseModal} from './baseModal';
import {ModalType} from 'enums/ModalType';

export interface IQuestionModal {
  cancelLabel : string;
  confirm     : () => void;
  confirmLabel: string;
  message     : string | string[];
  title       : string;
  timeout?    : number;
}

export function QuestionModal(props: IQuestionModal) {
  const {
    ...modalProps
  } = props;

  return (
    <BaseModal type={ModalType.question} {...modalProps}/>
  );
}