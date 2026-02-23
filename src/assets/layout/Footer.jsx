import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 mt-5">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold">🏊‍♂️ SwimZone</h5>
            <p>
              SwimZone Swimming Pool provides a safe, clean, and modern
              environment for all age groups. We focus on fitness,
              professional coaching, and healthy lifestyle development.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-white text-decoration-none">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-white text-decoration-none">
                  SwimmingForm
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className="text-white text-decoration-none">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: info@swimzone.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Ahmedabad, Gujarat</p>
          </div>

        </div>

        <div className="text-center border-top pt-3 pb-2">
          <p className="mb-0">
            © {new Date().getFullYear()} SwimZone. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
