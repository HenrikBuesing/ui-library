import global from '../common/styles/global.module.scss';
import useAddAttribution from '@utils/addAttribution';
import styles from './details.module.scss';
import type {DetailsProps} from './types';
import cls from '@utils/conditionalClass';
import React, {useRef} from 'react';

export function Details(props: DetailsProps) {
  const {
    children,
    dark = false,
    divider = false,
    icon,
    iconPosition = 'start',
    summary,
    ...other
  } = props;

  const svgRef = useRef<SVGSVGElement>(null);
  useAddAttribution(svgRef);
  
  return (
    <details className={cls([styles.details, dark && global.dark])} {...other}>
      <summary className={cls([styles.summary, divider && styles.divider, styles[iconPosition]])}>
        {icon ?? 
          <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 320 512'} className={styles.chevron} ref={svgRef}>
            <path d={'M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'}/>
          </svg>
        }
        
        {summary}
      </summary>

      <div className={styles.content}>
        {children}
      </div>
    </details>
  );
}