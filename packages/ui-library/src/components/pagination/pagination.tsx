import global from '../common/styles/global.module.scss';
import type {PaginationProps} from './types';
import cls from '@utils/conditionalClass';
import React, {useState} from 'react';

export function Pagination(props: PaginationProps) {
  const {
    activePage = 1,
    afterCollapse = 1,
    beforeCollapse = 1,
    collapse = 1,
    dark = false,
    disablePrevButton = false,
    disableNextButton = false,
    disableFirstButton = false,
    disableLastButton = false,
    firstButton,
    lastButton,
    nextButton,
    pages,
    prevButton
  } = props;
  
  const [page, setPage] = useState(activePage);
  
  return (
    <nav className={cls([dark && global.dark])}>
      <ul>
        {!disableFirstButton && <li><button>first</button></li>}
        {!disablePrevButton && <li><button>prev</button></li>}

        
        
        {!disableNextButton && <li><button>next</button></li>}
        {!disableLastButton && <li><button>last</button></li>}
      </ul>
    </nav>
  );
}