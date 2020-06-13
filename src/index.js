import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/auth';
import { NavProvider } from './context/nav';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <NavProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </NavProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
