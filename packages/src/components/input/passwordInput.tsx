import React, {useEffect, useState} from 'react';
import {CustomInput, ICustomInput} from './customInput';
import {SVG} from 'components/images/svgIcon';
import {PasswordRuleTypes} from 'enums/passwordRuleTypes';
import generateKey from 'utils/generateKey';

interface IPasswordInput extends ICustomInput {
  ruleChecked     : string;
  rules           : PasswordRule[];
  ruleUnchecked   : string;
  capsLockWarning?: string;
  setFailedRules? : (value: PasswordRule[]) => void;
}

export interface PasswordRule {
  label   : string;
  count?  : number;
  type?   : PasswordRuleTypes;
  pattern?: string;
}

export function PasswordInput(props: IPasswordInput) {
  const {
    capsLockWarning,
    rules,
    ruleChecked,
    ruleUnchecked,
    setFailedRules,
    ...inputProps
  } = props;

  const [capsLock, setCapsLock] = useState(false);

  useEffect(() => {
    validateInput();
  }, [props.value]);

  useEffect(() => {
    if (!capsLockWarning) return;

    function setCapsLockState(event: globalThis.KeyboardEvent) {
      setCapsLock(event.getModifierState('CapsLock'));
    }

    document.addEventListener('keydown', setCapsLockState);

    return () => {document.removeEventListener('keydown', setCapsLockState)};
  }, []);

  function validateInput() {
    const failedRules: PasswordRule[] = [];

    rules.forEach(rule => {
      if (!checkRule(rule)) {
        failedRules.push(rule);
      }
    });

    setFailedRules?.(failedRules);
  }

  function checkRule(rule: PasswordRule): boolean {
    let pattern: string;

    if (rule.type) {
      if (!rule.count) throw new Error('count must not be empty if a type is provided');

      switch (rule.type) {
        case PasswordRuleTypes.minLength:
          pattern = `[a-zA-Z0-9ßÄäÖöÜü._!"\`'#%&§,:;<>=@{}~\\$\\(\\)\\*\\+\\/\\\\\\?\\[\\]\\^\\|\\-]{${rule.count},}`;
          break;
        case PasswordRuleTypes.maxLength:
          pattern = `^[a-zA-Z0-9ßÄäÖöÜü._!"\`'#%&,:;<>=@{}~\\$\\(\\)\\*\\+\\/\\\\\\?\\[\\]\\^\\|\\-]{0,${rule.count}}$`;
          break;
        case PasswordRuleTypes.letters:
          pattern = `[a-zA-ZßÄäÖöÜü]{${rule.count},}`;
          break;
        case PasswordRuleTypes.numbers:
          pattern = `[0-9]{${rule.count},}`;
          break;
        case PasswordRuleTypes.special:
          pattern = `[._!"\`'#%&§,:;<>=@{}~\\$\\(\\)\\*\\+\\/\\\\\\?\\[\\]\\^\\|\\-]{${rule.count},}`;
          break;
        case PasswordRuleTypes.upper:
          pattern = `[A-ZÄÖÜ]{${rule.count},}`;
          break;
        default:
          throw new Error('unrecognized rule type provided');
      }
    } else {
      if (!rule.pattern) {
        throw new Error('pattern must not be an empty string');
      }

      pattern = rule.pattern;
    }

    const reg = new RegExp(pattern);
    return reg.test(props.value);
  }

  return (
    <div>
      <CustomInput {...inputProps}/>

      <div className={'uil-password-rules'}>
        {capsLock &&
          <div className={'uil-password-rule'}>{capsLockWarning}</div>
        }

        {rules.map((rule, idx) =>
          <div key={generateKey(idx)} className={'uil-password-rule'}>
            <SVG src={checkRule(rule) ? ruleChecked : ruleUnchecked} height={12} width={12}/>

            <span>{rule.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}