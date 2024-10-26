import React from 'react';
import {BaseModal} from './baseModal';

interface IQuestionModal {
  cancel      : () => void;
  cancelLabel : string;
  confirm     : () => void;
  confirmLabel: string;
  message     : string | string[];
  title       : string;
}

/**
 * @example
 * ```jsx
 * <QuestionModal
 *  cancel={...}
 *  cancelLabel={"..."}
 *  confirm={...}
 *  confirmLabel={"..."}
 *  title={"..."}
 *  message={"..."}
 * />
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.docs.hbsng.com).
 */
export function QuestionModal(props: IQuestionModal) {
  const {
    cancel,
    ...modalProps
  } = props;

  return (
    <BaseModal type={'question'} close={cancel} {...modalProps}/>
  );
}