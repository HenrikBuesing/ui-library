'use client';
import styles from "./page.module.css";
import {Button} from "@hbuesing/ui-library";
import '@hbuesing/ui-library/index.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Button variant={'filled'}>TEST</Button>
    </div>
  );
}
