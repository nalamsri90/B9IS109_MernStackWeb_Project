import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer p-5 bg-dark text-white ">
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h1 className="mb-4">All Rights Reserved &copy; PrimePicks</h1>
        <p>
          <Link to="/about" className="text-white">
            About
          </Link>{" "}
          |{" "}
          <Link to="/contact" className="text-white">
            Contact
          </Link>{" "}
          |{" "}
          <Link to="/policy" className="text-white">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Footer;
