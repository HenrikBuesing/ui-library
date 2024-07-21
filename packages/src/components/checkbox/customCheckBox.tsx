import React, {ComponentPropsWithoutRef, ReactNode, useRef} from 'react';
import useInjectStyleSheet from "utils/useInjectStyles";

interface ICustomCheckbox extends ComponentPropsWithoutRef<'input'> {
  checked     : boolean;
  label?      : string;
  onCheck     : (value: boolean) => void;
  checkColor? : string;
  children?   : ReactNode;
}

export function CustomCheckBox(props: ICustomCheckbox) {
  const {
    checkColor,
    checked,
    onCheck,
    label,
    children,
    ...checkProps
  } = props;

  const nodeRef = useRef<HTMLDivElement>(null);
  useInjectStyleSheet(nodeRef);

  return (
    <div className={'uil-check-wrapper'} ref={nodeRef}>
      <label className={'uil-checkbox uil-check'}>
        <input type={'checkbox'} checked={checked} onChange={() => {onCheck(!checked)}} {...checkProps}/>
        <div className={'uil-checkmark'} style={{backgroundColor: checkColor}}/>
      </label>

      {children ? children : <span onClick={() => onCheck(!checked)}>{label}</span>}
    </div>
  );
}