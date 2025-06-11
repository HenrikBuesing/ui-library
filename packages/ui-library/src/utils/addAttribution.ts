import {type RefObject, useLayoutEffect} from 'react';

export default function useAddAttribution(ref: RefObject<SVGSVGElement | null>) {
  useLayoutEffect(() => {
    const comment = document.createComment('Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.');

    if (ref.current && !ref.current.innerHTML.includes('https://fontawesome.com License')) {
      ref.current?.appendChild(comment);
    }
  }, []);
}