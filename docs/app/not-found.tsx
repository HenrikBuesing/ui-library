import { NotFoundPage } from 'nextra-theme-docs';
import styles from '@/styles/styles.module.scss';

export default function NotFound() {
  return (
    <NotFoundPage content="Submit an issue" labels="documentation" className={styles.notFound}>
      <h1>Page not found</h1>
      
      <p>The requested page could not be found</p>
    </NotFoundPage>
  )
}