import React from 'react';
import {BaseModal} from './baseModal';

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
    <BaseModal type={'question'} close={cancel} {...modalProps}/>
  );
}