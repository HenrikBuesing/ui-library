import React, {ComponentPropsWithoutRef, ReactNode, useRef} from 'react';
import useInjectStyleSheet from 'utils/useInjectStyles';
import generateKey from 'utils/generateKey';

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

  const id = generateKey('check');
  const nodeRef = useRef<HTMLDivElement>(null);
  useInjectStyleSheet(nodeRef);

  return (
    <div className={'uil-check-wrapper'} ref={nodeRef}>
      <div className={'uil-checkbox uil-check'} onClick={() => {toggleCheck(!checked)}}>
        <input type={'checkbox'} checked={checked} onChange={() => {toggleCheck(!checked)}} {...checkProps} id={id}/>
        <div className={'uil-checkmark'} style={{backgroundColor: checkColor}}/>
      </div>

      <label htmlFor={id} className={'uil-check-label'}>
        {children ? children : label}
      </label>
    </div>
  );
}