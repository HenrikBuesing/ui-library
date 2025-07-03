import global from '../common/styles/global.module.scss';
import styles from './skeleton.module.scss';
import type {SkeletonProps} from './types';
import cls from '@utils/conditionalClass';
import React from 'react';

export function Skeleton(props: SkeletonProps) {
  const {
    dark = false,
    disableAnimation = false,
    height,
    width,
    radius
  } = props;
  
  return (
    <div 
      className={cls([
        styles.skeleton,
        !disableAnimation && styles.animation,
        dark && global.dark
      ])} 
      style={{height: height, width: width, borderRadius: radius}}
    />
  );
}