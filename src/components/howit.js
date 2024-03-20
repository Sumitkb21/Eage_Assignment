import React from "react";
import "../index.css"
import signup1 from "../images/signup1.PNG"
import learn1 from "../images/learn1.PNG"
import prompt1 from "../images/prompt1.png"
import ask1 from "../images/ask1.PNG"
import review1 from "../images/review1.PNG"
import watchvideo from "../images/watchvideo.png"
import howitsworks from "../images/howitsworks.png"






const Howitworks = () => {
  return (
    <section className="simplyenglish">
      <div className="container">
        <h1 className="abtus">How it Works</h1>
        <div className="row mt-5 d-flex align-items-center">
          <div className="col-lg-6 col-md-6 col-12 mt-2">
            <ul>
              <li>
                <img
                  src={signup1}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />{" "}
                Sign Up{" "}
              </li>
              <li>
                <img
                  src={learn1}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                Choose what you would like to learn
              </li>
              <li>
                <img
                  src={prompt1}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                Leverage the guided prompts
              </li>
              <li>
                <img
                  src={ask1}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                Type your own prompts to ask anything
              </li>
              <li>
                <img
                  src={review1}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                Review chat history
              </li>
            </ul>
            <div className="text-center mt-4">
              <img
                src={watchvideo}
                alt=""
                className="img-fluid"
                width="50%"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mt-2 text-center">
            <img
              src={howitsworks}
              alt="feature-img"
              width="85%"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
