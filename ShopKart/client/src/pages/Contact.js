import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact Us - Ecommerce App"}>
  <div className="row contactus py-4">
    <div className="col-md-6">
      <div className="mt-5"> {/* Add space at the top */}
        <img
          src="/images/contactus.jpeg"
          alt="Contact Us"
          className="img-fluid"
        />
      </div>
    </div>
    <div className="col-md-4">
      <div className="my-4">
        <h1 className="display-6 text-center bg-dark text-white p-1 rounded">
          CONTACT US
        </h1>
        <p className="lead text-justify mt-3">
          If you have any queries or need information about our products, feel
          free to contact us anytime. We are available 24/7 to assist you.
        </p>
        <div className="mt-4">
          <p className="mb-2">
            <BiMailSend /> : <a href="mailto:help@ecommerceapp.com">help@ecommerceapp.com</a>
          </p>
          <p className="mb-2">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mb-2">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-5"></div> {/* Space at the bottom */}
</Layout>


  );
};

export default Contact;
