import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top border-secondary">
      <div className="row">
        <div className="col-12 col-md">
          <img
            className="mb-2"
            src="https://stickynoted.netlify.app/favicon.ico"
            alt=""
            width="34"
            height="34"
          />
          <small className="d-block mb-3 text-dark">
            © HelloApp. {new Date().getFullYear()}.
          </small>
        </div>
        <div className="col-6 col-md">
          <h5 className="text-dark">Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a
                className="text-dark"
                href="https://www.producthunt.com/posts/stickynoted"
              >
                Product Hunt
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5 className="text-dark">About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-dark" to="/contact">
                Contact us
              </Link>
            </li>
            <li>
              <Link className="text-dark" to="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="text-dark" to="/terms">
                Privacy and Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
