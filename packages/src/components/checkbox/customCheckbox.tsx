import React, {ComponentPropsWithoutRef, ReactNode, useRef} from 'react';
import useInjectStyleSheet from 'utils/useInjectStyles';

interface ICustomCheckbox extends ComponentPropsWithoutRef<'input'> {
  checked    : boolean;
  toggleCheck: (value: boolean) => void;
  checkColor?: string;
  children?  : ReactNode;
  label?     : string;
}

export function CustomCheckbox(props: ICustomCheckbox) {
  const {
    checkColor,
    checked,
    children,
    toggleCheck,
    label,
    ...checkProps
  } = props;

  const nodeRef = useRef<HTMLDivElement>(null);
  useInjectStyleSheet(nodeRef);

  return (
    <div className={'uil-check-wrapper'} ref={nodeRef}>
      <label className={'uil-checkbox uil-check'}>
        <input type={'checkbox'} checked={checked} onChange={() => {toggleCheck(!checked)}} {...checkProps}/>
        <div className={'uil-checkmark'} style={{backgroundColor: checkColor}}/>
      </label>

      {children ? children : <span onClick={() => toggleCheck(!checked)} style={{cursor: 'pointer', userSelect: 'none'}}>{label}</span>}
    </div>
  );
}