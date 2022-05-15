// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { UiLogin, PageTitle } from '@my-org/ui-login';

export function App() {
  return (
    <>
      <h1>Welcome to My-Site</h1>
      <UiLogin />
      <PageTitle />
    </>
  );
}

export default App;
