import Footer from '@/components/Footer';
import './LandingView.css';

const LandingView = () => (
  <div className="container mx-auto">
    <div className="col-md-12 mt-3">
      <section className="jumbotron text-center">
        <div className="container2">
          <h1 className="jumbotron-heading">HelloApp</h1>
          <p className="lead text-muted">Vite starter with opinionated setup</p>
          <p className="mt-5">
            <a href="#getStarted" className="btn">
              Get started
            </a>{' '}
            &nbsp;
            <a href="#viewDocs" className="btn">
              View docs
            </a>
          </p>
        </div>
      </section>
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-3">
        <div className="w-full md:w-1/3">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Vite</h4>
              <p className="card-text">
                Fast DX and pre-setup with nav and auth context
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Router</h4>
              <p className="card-text">React Router with Auth Redirect ready</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Firebase</h4>
              <p className="card-text">
                Comes with Auth UI and system preconfigured
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default LandingView;
