import {RefObject, useEffect} from 'react';
import styles from './styles.scss';

const injectedStyles: Document[] = [];

export default function useInjectStyleSheet(nodeRef: RefObject<HTMLElement>): void {
  useEffect(() => {
    const parentDocument = nodeRef.current ? nodeRef.current.ownerDocument : document;

    if (typeof parentDocument !== "undefined" && !injectedStyles.includes(parentDocument)) {
      const styleElement = parentDocument.createElement("style");

      styleElement.innerHTML = styles;
      injectedStyles.push(parentDocument);

      parentDocument.head.appendChild(styleElement);
    }
  }, []);
}