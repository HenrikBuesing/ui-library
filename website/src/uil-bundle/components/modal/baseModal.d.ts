import React from 'react';
import { ModalType } from 'enums/modalType';
import './modal.scss';
interface IBaseModal {
    close: () => void;
    message: string | string[];
    title: string;
    type: ModalType;
    callback?: (() => void) | undefined;
    cancelLabel?: string;
    closeLabel?: string;
    confirm?: () => void;
    confirmLabel?: string;
    timeout?: number;
}
export declare function BaseModal(props: IBaseModal): React.JSX.Element;
export {};
