import styles from '../collapsible.module.scss';
import type {AccordionProps} from './types';
import React, {isValidElement} from 'react';
import cls from '@utils/conditionalClass';
import {Details} from '../details';

export function Accordion(props: AccordionProps) {
  const {
    children,
    dark = false,
    divider = false, 
    icon,
    iconPosition,
    name
  } = props;

  if (children) {
    children.forEach(child => {
      if (!isValidElement(child) || child.type !== Details) {
        throw new Error(`<Accordion> received an invalid child. Expected <Details />, but got: ${isValidElement(child) ? String(child.type) : typeof child}.`);  
      }
    });
  }
  
  return (
    <div className={cls([styles.accordion])}>
      {children.map((child, idx) => (
        <Details 
          key={idx}
          {...child.props}
          dark={child.props.dark ?? dark}
          divider={child.props.divider ?? divider}
          icon={child.props.icon ?? icon}
          iconPosition={child.props.iconPosition ?? iconPosition}
          name={child.props.name ?? name}
        />
      ))}
    </div>
  );
}