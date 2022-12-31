import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/auth';
import { NavProvider } from './context/nav';

import 'font-awesome/css/font-awesome.css';
import './index.css';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <NavProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </NavProvider>
  </BrowserRouter>
);
