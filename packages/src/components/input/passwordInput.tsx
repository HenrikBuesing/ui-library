import React, {useEffect, useState} from 'react';
import {CustomInput, type ICustomInput} from './customInput';
import {Icon} from 'components/icon/icon';
import generateKey from 'utils/generateKey';
import style from './input.module.scss';

interface IPasswordInput extends ICustomInput {
  ruleChecked     : string;
  rules           : PasswordRule[];
  ruleUnchecked   : string;
  capsLockWarning?: string;
  setFailedRules? : (value: PasswordRule[]) => void;
}

/**
 * Password rule
 * @example
 * ```js
 * const rule = {
 *  label: "minimum password length",
 *  count: 5
 *  type: "minLength"
 * }
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.hbsng.com/docs/components/passwordInput).
 */
export interface PasswordRule {
  label   : string;
  count?  : number;
  type?   : 'minLength' | 'maxLength' | 'letters' | 'numbers' | 'special' | 'upper';
  pattern?: string;
}

/**
 * @example
 * ```jsx
 * <PasswordInput
 *  ruleChecked={"/foo/bar.svg"}
 *  ruleUnchecked={"/foo/bar.svg"}
 *  rules={[...]}
 *  value={...}
 *  valueChanged={...}
 *  label={"..."}
 * />
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.hbsng.com/docs/components/passwordInput).
 */
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
        case 'minLength':
          pattern = `[a-zA-Z0-9ßÄäÖöÜü._!"\`'#%&§,:;<>=@{}~\\$\\(\\)\\*\\+\\/\\\\\\?\\[\\]\\^\\|\\-]{${rule.count},}`;
          break;
        case 'maxLength':
          pattern = `^[a-zA-Z0-9ßÄäÖöÜü._!"\`'#%&,:;<>=@{}~\\$\\(\\)\\*\\+\\/\\\\\\?\\[\\]\\^\\|\\-]{0,${rule.count}}$`;
          break;
        case 'letters':
          pattern = `[a-zA-ZßÄäÖöÜü]{${rule.count},}`;
          break;
        case 'numbers':
          pattern = `[0-9]{${rule.count},}`;
          break;
        case 'special':
          pattern = `[._!"\`'#%&§,:;<>=@{}~\\$\\(\\)\\*\\+\\/\\\\\\?\\[\\]\\^\\|\\-]{${rule.count},}`;
          break;
        case 'upper':
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
    return reg.test(props.value.toString());
  }

  return (
    <div>
      <CustomInput {...inputProps}/>

      <div className={style.passwordRules}>
        {capsLock && <div className={style.rule}>{capsLockWarning}</div>}

        {rules.map(rule =>
          <div key={generateKey()} className={style.rule}>
            <Icon type={'svg'} src={checkRule(rule) ? ruleChecked : ruleUnchecked} height={12} width={12}/>

            <span>{rule.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}