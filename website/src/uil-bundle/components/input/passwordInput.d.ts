import React from 'react';
import { ICustomInput } from './customInput';
import { PasswordRuleTypes } from 'enums/passwordRuleTypes';
interface IPasswordInput extends ICustomInput {
    ruleChecked: string;
    rules: PasswordRule[];
    ruleUnchecked: string;
    capsLockWarning?: string;
    setFailedRules?: (value: PasswordRule[]) => void;
}
export interface PasswordRule {
    count: number;
    label: string;
    type: PasswordRuleTypes | string;
    pattern?: string;
}
export declare function PasswordInput(props: IPasswordInput): React.JSX.Element;
export {};
