import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Ecommerce App"}>
    <div className="row contactus py-4">
      <div className="col-md-5">
        <img
          src="/images/about.jpeg"
          alt="About Us"
          className="img-fluid"
        />
      </div>
      <div className="col-md-5">
        <div className="my-4">
          <h2 className="display-2">Our Story</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </div>
    <div className="mt-5"></div> {/* Space at the bottom */}
  </Layout>
  

  );
};

export default About;
