import React, {ComponentPropsWithoutRef, useRef} from 'react';
import {SVG} from 'components/images/svgIcon';
import useInjectStyleSheet from 'utils/useInjectStyles';

export interface IBaseInput extends ComponentPropsWithoutRef<'input'> {
  label       : string;
  value       : string;
  valueChanged: (value: string) => void;
  iconColor?  : string;
  iconSrc?    : string;
  inputColor? : string;
  toggle?     : () => void;
}

export function BaseInput(props: IBaseInput) {
  const {
    iconColor,
    iconSrc,
    inputColor,
    label,
    toggle,
    valueChanged,
    ...inputProps
  } = props;

  const nodeRef = useRef<HTMLLabelElement>(null);
  useInjectStyleSheet(nodeRef);

  return (
    <label className={'uil-input-wrapper'} htmlFor={inputProps.id} ref={nodeRef}>
      <input
        className={'uil-input uil-font-base'}
        onChange={(e) => valueChanged(e.target.value)}
        placeholder={label}
        style={{color: inputColor}}
        {...inputProps}
      />

      {iconSrc &&
        <div className={'uil-icon'} onClick={toggle}>
          <SVG src={iconSrc} width={24} height={24} color={iconColor}/>
        </div>
      }

      <span className={'uil-label uil-font-base'} style={{color: inputColor}}>{label}</span>
    </label>
  );
}