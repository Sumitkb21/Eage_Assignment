import React from "react";
import "../index.css"
import benefit1 from "../images/benefit1..PNG"
import benefit2 from "../images/benefit2.PNG"
import benefit3 from "../images/benefit3.PNG"

const Benefit = () => {
  return (
    <section className="benefit">
      <div className="container">
        <h1 className="abtus text-white">Key Benefits</h1>
        <div className="row mt-5 d-flex align-items-center">
          <div className="col-lg-4 col-md-4 col-12 mt-2 text-center">
            <img
              src={benefit1}
              alt="feature-img"
              width="180px"
              className="img-fluid rounded"
            />
            <h3 className="text-white mt-4">24X7 English Tutor</h3>
          </div>
          <div className="col-lg-4 col-md-4 col-12 mt-2 text-center">
            <img
              src={benefit2}
              alt="feature-img"
              width="180px"
              className="img-fluid rounded"
            />
            <h3 className="text-white mt-4">Ask Questions Any Time</h3>
          </div>
          <div className="col-lg-4 col-md-4 col-12 mt-2 text-center">
            <img
              src={benefit3}
              alt="feature-img"
              width="180px"
              className="img-fluid rounded"
            />
            <h3 className="text-white mt-4">Progress Tracking</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
