import {useId, useState} from 'react';

export default function generateKey() {
  const r = new Uint32Array(2);
  crypto.getRandomValues(r);

  return `uil${r[0].toString(32)}${r[1].toString(16)}`;
}

export function useStableId() {
  if (typeof useId === 'function') {
    return useId();
  } else {
    const [id] = useState(() => generateKey());
    return id;
  }
}