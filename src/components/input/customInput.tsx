import React, {useState} from 'react';
import {BaseInput, IBaseInput} from './baseInput';
import {SVG} from '../images/svgIcon';
import './input.scss';

interface ICustomInput extends IBaseInput {
  tooltipIcon? : string;
  tooltipText? : string;
  tooltipClose?: string
}

export function CustomInput(props: ICustomInput) {
  const {
    tooltipIcon,
    tooltipText,
    tooltipClose,
    ...inputProps
  } = props;

  const [tooltipVisible, setTooltipVisible] = useState(false);

  function closeTooltip() {
    setTooltipVisible(false);
  }

  return (
    <>
      {tooltipIcon ?
        <div className={'uil-tooltip-wrapper'}>
          {tooltipVisible &&
            <div className={'uil-tooltip'} onClick={closeTooltip}>
              {tooltipClose &&
                <button className={'uil-tooltip-button'} onClick={closeTooltip}>
                  {tooltipClose}
                </button>
              }

              <span>{tooltipText}</span>
            </div>
          }

          <div className={'uil-tooltip-icon'} onClick={() => setTooltipVisible(!tooltipVisible)}>
            <SVG src={tooltipIcon} height={16} width={16}/>
          </div>

          <BaseInput {...inputProps}/>
        </div> :

        <BaseInput {...inputProps}/>
      }
    </>
  );
}