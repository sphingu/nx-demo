// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { UiLogin, PageTitle } from '@my-org/ui-login';
import { useEffect, useState } from 'react';

export function App() {
  const [message, setMessage] = useState<string>('Loading...');
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data?.message || ''));
  });
  console.log('RENDERING');
  return (
    <>
      <h1>Welcome to My-Site</h1>
      <h2>Message from API : {message}</h2>
      <UiLogin />
      <PageTitle />
    </>
  );
}

export default App;
