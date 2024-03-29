import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { theme } from './theme';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
