import React from 'react';
import { ICustomInput } from './customInput';
import { PasswordRuleTypes } from 'enums/passwordRuleTypes';
import './input.scss';
interface IPasswordInput extends ICustomInput {
    capsLockWarning: string;
    setFailedRules: (value: PasswordRule[]) => void;
    ruleChecked: string;
    rules: PasswordRule[];
    ruleUnchecked: string;
}
export interface PasswordRule {
    count: number;
    label: string;
    type: PasswordRuleTypes | string;
    pattern?: string;
}
export declare function PasswordInput(props: IPasswordInput): React.JSX.Element;
export {};
