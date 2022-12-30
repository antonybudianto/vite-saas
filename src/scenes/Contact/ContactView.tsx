import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

function ContactView() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 bg-light mt-3 p-5 rounded">
          <h1>Contact us</h1>
          <p>
            If you have any inquiry about our service pricing or support, please
            email to{' '}
            <a href="mailto:antonybudianto@gmail.com">
              antonybudianto@gmail.com
            </a>
          </p>
          <p>We'll get back to you within 24 hours.</p>
          <div className="mt-5">
            <Link to="/">Back to Home</Link>
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
}

export default ContactView;
