/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { makeServer } from '@/_mocks/server';

import { store } from '@/store';
import MessageAlertProvider from '@/features/messageAlert/MessageAlertProvider';

import App from './App';
import { GlobalStyles } from './GlobalStyles';

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  makeServer({ environment: 'development' });
}

const renderApp = () => {
  const container = document.getElementById('root');
  if (!container) {
    throw new Error('No root container found');
  }
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <MessageAlertProvider>
          <GlobalStyles>
            <App />
          </GlobalStyles>
        </MessageAlertProvider>
      </Provider>
    </StrictMode>
  );
};

renderApp();
