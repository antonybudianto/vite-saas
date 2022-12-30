import { useState, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { Routes } from 'react-router-dom';
import loadable from '@loadable/component';

import Navbar from './components/Navbar/Navbar';
import './App.css';

import { useUser } from './context/auth';
import CustomRoute from './components/CustomRoute';
import { getAuth } from 'firebase/auth';

const HomeView = loadable(() => import('./scenes/Home/HomeView'));
const LoginView = loadable(() => import('./scenes/Login/LoginView'));
const LandingView = loadable(() => import('./scenes/Landing/LandingView'));
const ContactView = loadable(() => import('./scenes/Contact/ContactView'));

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
initializeApp(config);

const App = () => {
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useUser();

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged(
      (user) => {
        setUser(user);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );
  }, [setUser]);

  return (
    <div className="App" id="app">
      <Navbar />

      <Routes>
        <Route
          path="/dashboard"
          element={
            <CustomRoute
              user={user}
              loading={loading}
              redirectNoAuth="/login"
              component={HomeView}
            />
          }
        />
        <Route
          path="/login"
          element={
            <CustomRoute
              user={user}
              loading={loading}
              redirectAuth="/dashboard"
              component={LoginView}
            />
          }
        />
        <Route
          path="/"
          element={
            <CustomRoute
              user={user}
              loading={loading}
              skipLoading={true}
              component={LandingView}
            />
          }
        />
        <Route path="/contact" element={<ContactView />} />
        <Route path="**" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
