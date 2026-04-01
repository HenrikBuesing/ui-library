import {useEffect, useRef} from 'react';

export function useScrollLock(active: boolean, scrollable: boolean) {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!active || scrollable) return;

    scrollYRef.current = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollYRef.current);
    };
  }, [active, scrollable]);
}