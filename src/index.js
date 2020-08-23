import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/auth';
import { NavProvider } from './context/nav';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { info } from './utils/toastr';

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

serviceWorker.register({
  onSuccess: () => {
    info('Content is cached for offline use');
  },
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting;
    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener('statechange', (event) => {
        if (event.target.state === 'activated') {
          info(
            'New content is available. Page will reload within 3 seconds...'
          );
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      });
      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
    }
  },
});
