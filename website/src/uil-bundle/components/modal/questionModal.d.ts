import React from 'react';
export interface IQuestionModal {
    cancel: () => void;
    cancelLabel: string;
    confirm: () => void;
    confirmLabel: string;
    message: string | string[];
    title: string;
}
export declare function QuestionModal(props: IQuestionModal): React.JSX.Element;
