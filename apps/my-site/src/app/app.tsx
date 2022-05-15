// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { UiLogin, PageTitle } from '@my-org/ui-login';
import { useEffect, useState } from 'react';
import { APIResponse, API_URL } from '@my-org/api-interface';

export function App() {
  const [response, setResponse] = useState<APIResponse>({
    message: 'Loading...',
  });
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setResponse);
  }, []);
  return (
    <>
      <h1>Welcome to My-Site</h1>
      <h2>Message from API : {response.message}</h2>
      <UiLogin />
      <PageTitle />
    </>
  );
}

export default App;
