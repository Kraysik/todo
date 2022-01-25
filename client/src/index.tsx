import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppThemeProvider } from './theme/theme';
import { Provider } from 'react-redux';
import { store } from './store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App/>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </AppThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
