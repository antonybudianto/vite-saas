import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="md:container mx-3 md:mx-auto pt-4 md:my-5 md:pt-5 border-top border-secondary">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/5 mb-5 md:mb-0">
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
        <div className="w-2/5 mb-5 flex flex-col content-center md:mb-0 md:ml-10">
          <h5 className="text-dark">Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a
                className="text-dark text-cyan-700 hover:underline"
                href="https://www.producthunt.com/posts/stickynoted"
              >
                Product Hunt
              </a>
            </li>
          </ul>
        </div>
        <div className="w-2/5 flex flex-col content-center">
          <h5 className="text-dark">About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link
                className="text-dark text-cyan-700 hover:underline"
                to="/contact"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                className="text-dark text-cyan-700 hover:underline"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="text-dark text-cyan-700 hover:underline"
                to="/terms"
              >
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
