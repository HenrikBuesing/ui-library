import global from '../common/styles/global.module.scss';
import useAddAttribution from '@utils/addAttribution';
import {useScrollLock} from '@hooks/useScrollLock';
import React, {useRef, useState} from 'react';
import type {BurgerMenuProps} from './types';
import styles from './burger.module.scss';
import cls from '@utils/conditionalClass';

export function BurgerMenu(props: BurgerMenuProps) {
  const {
    alignment,
    children,
    closeIcon,
    dark,
    openIcon,
  } = props;

  const [visibility, setVisibility] = useState(false);
  useScrollLock(visibility);

  const closeRef = useRef<SVGSVGElement>(null);
  const openRef = useRef<SVGSVGElement>(null);
  useAddAttribution(closeRef);
  useAddAttribution(openRef);

  function handleSidebar() {
    setVisibility(!visibility);
  }

  return (
    <>
      <button className={cls([styles.burgerControl, dark && global.dark])} onClick={handleSidebar}>
        {openIcon ??
          <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 640 640'} className={styles.icon} ref={openRef}>
            <path
              d={'M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z'}/>
          </svg>
        }
      </button>

      {visibility &&
        <div className={styles.blur} onClick={handleSidebar}/>
      }

      <div className={cls([styles.menuWrapper, alignment === 'left' ? styles.left : styles.right, visibility && styles.transform, dark && global.dark])}>
        <button className={styles.burgerControl} onClick={handleSidebar}>
          {closeIcon ??
            <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 640 640'} className={styles.icon} ref={closeRef}>
              <path d={'M416 160L480 160C497.7 160 512 174.3 512 192L512 448C512 465.7 497.7 480 480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L480 544C533 544 576 501 576 448L576 192C576 139 533 96 480 96L416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160zM406.6 342.6C419.1 330.1 419.1 309.8 406.6 297.3L278.6 169.3C266.1 156.8 245.8 156.8 233.3 169.3C220.8 181.8 220.8 202.1 233.3 214.6L306.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L306.7 352L233.3 425.4C220.8 437.9 220.8 458.2 233.3 470.7C245.8 483.2 266.1 483.2 278.6 470.7L406.6 342.7z'}/>
            </svg>
          }
        </button>
        
        <nav onClick={handleSidebar}>
          {children}
        </nav>
      </div>
    </>
  );
}