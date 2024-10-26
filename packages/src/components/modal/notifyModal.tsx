import React from 'react';
import {BaseModal} from './baseModal';

interface INotifyModal {
  close     : () => void;
  closeLabel: string;
  modalType : 'success' | 'warning' | 'error';
  message   : string | string[];
  title     : string;
  callback? : (() => void) | undefined;
  timeout?  : number;
}

/**
 * @example
 * ```jsx
 * <NotifyModal
 *  close={...}
 *  closeLabel={"..."}
 *  modalType={"success"}
 *  title={"..."}
 *  message={"..."}
 * />
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.hbsng.com/docs/components/modal).
 */
export function NotifyModal(props: INotifyModal) {
  const {
    modalType,
    ...modalProps
  } = props;

  return (
    <BaseModal type={modalType} {...modalProps}/>
  );
}