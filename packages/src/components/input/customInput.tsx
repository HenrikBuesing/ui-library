import React, {useRef, useState} from 'react';
import {BaseInput, IBaseInput} from './baseInput';
import {SVG} from 'components/images/svgIcon';
import {useClickOutsideRef} from 'hooks/clickOutside';
import useInjectStyleSheet from "utils/useInjectStyles";

export interface ICustomInput extends IBaseInput {
  tooltipClose?: string;
  tooltipIcon? : string;
  tooltipText? : string;
}

export function CustomInput(props: ICustomInput) {
  const {
    tooltipClose,
    tooltipIcon,
    tooltipText,
    ...inputProps
  } = props;

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const ref = useClickOutsideRef<HTMLDivElement>(closeTooltip);
  const nodeRef = useRef<HTMLDivElement>(null);
  useInjectStyleSheet(nodeRef);

  function closeTooltip() {
    setTooltipVisible(false);
  }

  return (
    <div ref={nodeRef}>
      {tooltipIcon ?
        <div className={'uil-tooltip-wrapper'} ref={ref}>
          {tooltipVisible &&
            <div className={'uil-tooltip'}>
              {tooltipClose &&
                <button className={'uil-tooltip-button uil-fit'} onClick={closeTooltip}>
                  {tooltipClose}
                </button>
              }

              <span>{tooltipText}</span>
            </div>
          }

          <div className={'uil-tooltip-icon uil-fit'} onClick={() => setTooltipVisible(!tooltipVisible)}>
            <SVG src={tooltipIcon} height={16} width={16}/>
          </div>

          <BaseInput {...inputProps}/>
        </div> :

        <BaseInput {...inputProps}/>
      }
    </div>
  );
}