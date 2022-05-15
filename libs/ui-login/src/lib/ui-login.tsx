import styles from './ui-login.module.css';

/* eslint-disable-next-line */
export interface UiLoginProps {}

export function UiLogin(props: UiLoginProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiLogin Library!</h1>
    </div>
  );
}

export default UiLogin;
