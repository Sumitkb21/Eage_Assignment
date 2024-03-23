import React, { useEffect } from "react";
import "../index.css";

import test2 from "../images/test2.PNG";
import test1 from "../images/test1.PNG";

import test4 from "../images/test4.png";

import test3 from "../images/test3.PNG";

import test5 from "../images/test5.png";
import test6 from "../images/test6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// // import required modules
// import { Navigation } from "swiper/modules";

const ClientsTestimonials = () => {
  return (
    <section className="clients">
      <div className="container mt-5">
        <h1 className="abtus mt-4 mb-5">What our clients say</h1>
        <div className="row clienthead">
          <div className="col-md-12">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="col-sm-12 d-flex">
                    <div className="testimonial">
                      <img src={test2} className="imgtest" alt="" />
                      <h5 className="mt-4">Arjun from Bangalore</h5>
                      <p className="description mt-4">
                        "SimplyEnglish played a key role in my professional
                        growth. The refined communication skills and insightful
                        Guided Learning Prompts helped me secure a promotion.
                        Grateful for the app's impact on my career!"
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="col-sm-12 d-flex">
                    <div className="testimonial">
                      <img src={test1} className="imgtest" alt="" />
                      <h5 className="mt-4">Priya from Mumbai</h5>
                      <p className="description mt-4">
                        "Navigating Chat History on SimplyEnglish kept my
                        learning organized and proved crucial for my important
                        presentation preparation. Thanks to the app, I delivered
                        with confidence and received positive feedback."
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="col-sm-12 d-flex">
                    <div className="testimonial">
                      <img src={test3} className="imgtest" alt="" />
                      <h5 className="mt-4">Aisha from Hyderabad</h5>
                      <p className="description mt-4">
                        "Ask Anything is my favorite feature on SimplyEnglish.
                        It clarified my doubts during exam preparation, and the
                        confidence gained through the app's unique features
                        helped me clear my exam with flying colors."
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="col-sm-12 d-flex">
                    <div className="testimonial">
                      <img src={test4} className="imgtest" alt="" />
                      <h5 className="mt-4">Raj from Delhi</h5>
                      <p className="description mt-4">
                        "SimplyEnglish's interactive learning was a game-changer
                        for my business dealings. Personalized lessons and
                        instant feedback through Voice-Enabled Learning
                        significantly contributed to cracking a major business
                        deal."
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="col-sm-12 d-flex">
                    <div className="testimonial">
                      <img src={test5} className="imgtest" alt="" />
                      <h5 className="mt-4">Vikram from Chennai</h5>
                      <p className="description mt-4">
                        "As a content creator, SimplyEnglish was my go-to app
                        for writing interactive website content. The fine-tuned
                        language skills, courtesy of the app's features, made my
                        content more engaging and impactful."
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial">
                    <img src={test6} className="imgtest" alt="" />
                    <h5 className="mt-4">Neha from Kolkata</h5>
                    <p className="description mt-4">
                      "SimplyEnglish significantly impacted my exam preparation.
                      The seamless Voice-Enabled Learning made practicing skills
                      easy, and thanks to the app, I cleared my exam with
                      confidence. Highly recommended!"
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsTestimonials;
