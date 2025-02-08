import global from '@common/styles/global.module.scss';
import {useClickOutsideRef} from '@hooks/clickOutside';
import type {InputProps, InputRule} from './types';
import React, {useEffect, useState} from 'react';
import generateKey from '@utils/generateKey';
import style from './input.module.scss';
import {Icon} from '../icon';

export function Input(props: InputProps) {
  const {
    capsLockWarning,
    iconSrc,
    label,
    toggle,
    ttText,
    ttIcon,
    ttClose,
    id,
    rules,
    value = '',
    ...inputProps
  } = props;

  const ID = id ?? generateKey();
  const [capsLock, setCapsLock] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const ref = useClickOutsideRef<HTMLDivElement>(closeTooltip);

  function closeTooltip() {
    setTooltipVisible(false);
  }

  function checkRule(rule: InputRule): boolean {
    let pattern: string;

    if (rule.type) {
      if (!rule.occurrence) throw new Error('count must not be empty if a type is provided');

      switch (rule.type) {
        case 'minLength':
          pattern = `[a-zA-Z0-9ßÄäÖöÜü._!"\`'#%&§,:;<>=@{}~\\$\\(\\)\\*\\+\\/\\\\\\?\\[\\]\\^\\|\\-]{${rule.occurrence},}`;
          break;
        case 'maxLength':
          pattern = `^[a-zA-Z0-9ßÄäÖöÜü._!"\`'#%&,:;<>=@{}~\\$\\(\\)\\*\\+\\/\\\\\\?\\[\\]\\^\\|\\-]{0,${rule.occurrence}}$`;
          break;
        case 'letters':
          pattern = `[a-zA-ZßÄäÖöÜü]{${rule.occurrence},}`;
          break;
        case 'numbers':
          pattern = `[0-9]{${rule.occurrence},}`;
          break;
        case 'special':
          pattern = `[._!"\`'#%&§,:;<>=@{}~\\$\\(\\)\\*\\+\\/\\\\\\?\\[\\]\\^\\|\\-]{${rule.occurrence},}`;
          break;
        case 'upper':
          pattern = `[A-ZÄÖÜ]{${rule.occurrence},}`;
          break;
        default:
          throw new Error('unrecognized rule type provided');
      }
    } else {
      if (!rule.regex) {
        throw new Error('pattern must not be an empty string');
      }

      pattern = rule.regex;
    }

    const reg = new RegExp(pattern);
    return reg.test(value.toString());
  }

  useEffect(() => {
    if (!capsLockWarning) return;

    function setCapsLockState(event: globalThis.KeyboardEvent) {
      setCapsLock(event.getModifierState('CapsLock'));
    }

    document.addEventListener('keydown', setCapsLockState);

    return () => {document.removeEventListener('keydown', setCapsLockState)};
  }, []);

  // TODO refactoring for css is required! 
  return (
    <>
      {ttText && ttIcon && ttClose && 
        <div className={style.tooltipWrapper} ref={ref}>
          {tooltipVisible &&
            <div className={style.tooltip}>
              {ttClose &&
                <button className={`${style.tooltipButton} ${global.fit}`} type={'button'} onClick={closeTooltip}>
                  {ttClose}
                </button>
              }

              <span>{ttText}</span>
            </div>
          }

          <div className={`${style.tooltipIcon} ${global.fit}`} onClick={closeTooltip}>
            <Icon src={ttIcon} size={'small'} type={'svg'}/>
          </div>
        </div>
      }

      <div className={'input wrapper'}>
        <label className={style.inputWrapper} htmlFor={ID}>
          <span className={`${style.label} ${global.fontMedium}`}>{label}</span>
        </label>

        <input id={ID} className={`${style.input} ${global.fontMedium}`} placeholder={label} value={value} {...inputProps}/>

        {iconSrc &&
          <div className={style.icon} onClick={toggle}>
            <Icon type={'svg'} src={iconSrc} width={24} height={24}/>
          </div>
        }
      </div>

      <div className={style.passwordRules}>
        {capsLock && <div className={style.rule}>{capsLockWarning}</div>}

        {rules.map(rule =>
          <div key={generateKey()} className={style.rule}>
            <span className={checkRule(rule) ? 'checked' : 'failed'}>{rule.label}</span>
          </div>
        )}
      </div>
    </>
  );
}