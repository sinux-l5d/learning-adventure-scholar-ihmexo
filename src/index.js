import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';
import reportWebVitals from './test/reportWebVitals';
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
