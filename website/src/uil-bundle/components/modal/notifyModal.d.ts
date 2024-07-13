import React from 'react';
export interface INotifyModal {
    close: () => void;
    closeLabel: string;
    modalType: 'success' | 'warning' | 'error';
    message: string | string[];
    title: string;
    callback?: (() => void) | undefined;
    timeout?: number;
}
export declare function NotifyModal(props: INotifyModal): React.JSX.Element;
