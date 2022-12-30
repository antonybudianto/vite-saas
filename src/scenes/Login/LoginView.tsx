import { useCallback } from 'react';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import Footer from '@/components/Footer';

const LoginView = () => {
  const signInGoogle = useCallback(() => {
    let provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider).then((res) => console.log(res));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3 p-5 bg-light rounded">
          <h1>Sign-in </h1>
          <p className="lead">
            Sign-in for free and access your services anywhere.
          </p>
          <div className="mt-5">
            <button
              className="btn btn-default btn-outline-secondary"
              onClick={signInGoogle}
            >
              <i className="fa fa-google" /> Sign in using Google
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LoginView;
