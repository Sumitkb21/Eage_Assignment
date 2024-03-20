import React, { useEffect } from "react";
import "../index.css";
import communication from "../images/communication.PNG";
import speak from "../images/speak.PNG";
import powerful from "../images/powerful.jpeg";
import craft from "../images/craft.PNG";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const CaseStudy = () => {
  return (
    <section className="casestudy">
      <div className="container mt-5">
        <h1 className="abtus mt-4">Case Study</h1>
        <div className="row mt-5 mb-3">
          <div className="col-md-12">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="col-sm-12 d-flex">
                    <div className="">
                      <img className="card-img-top" src={craft} alt="" />
                      <div className="card-body">
                        <h5 className="card-text">
                          Craft A+ Essays: Elevate your grades with Simply
                          English's writing expertise.
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="col-sm-12 d-flex">
                    <div className="">
                      <img
                        className="card-img-top"
                        src={communication}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5>
                          From Lines of Code to Lines of Communication: Simply
                          English Unleashes Your Potentia
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="col-sm-12 d-flex">
                    <div className="">
                      <img
                        className="card-img-top"
                        src={speak}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5>
                          Speak with Heart: Simply English—Moms, speaking the
                          language of their children with ease
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="col-sm-12 d-flex">
                    <div className="">
                      <img
                        className="card-img-top"
                        src={powerful}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="">
                          Powerful Vision, Persuasive Words: Simply English for
                          Business Leaders.
                        </h5>
                      </div>
                    </div>
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

export default CaseStudy;
