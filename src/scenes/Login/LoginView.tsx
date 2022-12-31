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
    <div className="container mx-3 md:mx-auto">
      <div className="mt-3 py-5 bg-light rounded md:my-28">
        <h1>Sign-in </h1>
        <p className="lead">
          Sign-in for free and access your services anywhere.
        </p>
        <div className="mt-5">
          <button
            className="btn btn-default border px-4 py-2 btn-outline-secondary hover:bg-slate-300"
            onClick={signInGoogle}
          >
            <i className="fa fa-google" /> Sign in using Google
          </button>
        </div>
      </div>
      <div className="col-md-12">
        <Footer />
      </div>
    </div>
  );
};

export default LoginView;
