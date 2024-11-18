import React, {useState} from 'react';
import {BaseInput, IBaseInput} from './baseInput';
import {Icon} from 'components/icon/icon';
import {useClickOutsideRef} from 'hooks/clickOutside';
import style from './input.module.scss';
import global from '../global.module.scss';

export interface ICustomInput extends IBaseInput {
  tooltipClose?: string;
  tooltipIcon? : string;
  tooltipText? : string;
}

/**
 * @example
 * ```jsx
 * <PasswordInput
 *  value={...}
 *  valueChanged={...}
 *  label={"..."}
 * />
 * ```
 *
 * For more information go to the [docs](https://www.ui-library.hbsng.com/docs/components/input).
 */
export function CustomInput(props: ICustomInput) {
  const {
    tooltipClose,
    tooltipIcon,
    tooltipText,
    ...inputProps
  } = props;

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const ref = useClickOutsideRef<HTMLDivElement>(closeTooltip);

  function closeTooltip() {
    setTooltipVisible(false);
  }

  return (
    <>
      {tooltipIcon ?
        <div className={style.tooltipWrapper} ref={ref}>
          {tooltipVisible &&
            <div className={style.tooltip}>
              {tooltipClose &&
                <button className={`${style.tooltipButton} ${global.fit}`} onClick={closeTooltip}>
                  {tooltipClose}
                </button>
              }

              <span>{tooltipText}</span>
            </div>
          }

          <div className={`${style.tooltipIcon} ${global.fit}`} onClick={() => {setTooltipVisible(!tooltipVisible)}}>
            <Icon src={tooltipIcon} size={'small'} type={'svg'}/>
          </div>

          <BaseInput {...inputProps}/>
        </div> :

        <BaseInput {...inputProps}/>
      }
    </>
  );
}