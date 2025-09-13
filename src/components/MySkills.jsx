import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

function MySkills() {
  return (
    <>
      {/* <!-- skills --> */}
      <section className="section">
        <div className="container">
          <div className="row" style={{ gap: "20px" }}>
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Skills</h2>
            </div>

            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              modules={[Autoplay]}
              className='pb-5'
            >
              <SwiperSlide>
                <div className="card skillCard shadow text-center position-relative">
                  <img src="/images/skills/html.png" alt="" />
                  <div className="position-relative rounded-top progress-wrapper" data-color="#fdb157" style={{background:"rgb(228 77 38)"}}>
                    <div className="wave" data-progress="90%"></div>
                  </div>
                  <div className="card-footer bg-white">
                    <h4 className="card-title">HTML</h4>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card skillCard shadow text-center position-relative">
                  <img src="/images/skills/css.svg" alt="" />
                  <div className="position-relative rounded-top progress-wrapper" data-color="#9473e6" style={{background:"rgb(21 114 182)"}}>
                    <div className="wave" data-progress="60%"></div>
                  </div>
                  <div className="card-footer bg-white">
                    <h4 className="card-title">CSS</h4>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card skillCard shadow text-center position-relative">
                  <img src="/images/skills/javascript.png" alt="" />
                  <div className="position-relative rounded-top progress-wrapper" data-color="#bdecf6" style={{background:"rgb(247 223 30)"}}>
                    <div className="wave" data-progress="80%"></div>
                  </div>
                  <div className="card-footer bg-white">
                    <h4 className="card-title">JavaScript</h4>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card skillCard shadow text-center position-relative">
                  <img src="/images/skills/Node.js_logo.svg" alt="" />
                  <div className="position-relative rounded-top progress-wrapper" data-color="#ffbcaa"style={{background:"rgb(116 184 87)"}}>
                    <div className="wave" data-progress="70%"></div>
                  </div>
                  <div className="card-footer bg-white">
                    <h4 className="card-title">Node.js</h4>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card skillCard shadow text-center position-relative">
                  <img src="/images/skills/react.png" alt="" />
                  <div className="position-relative rounded-top progress-wrapper" data-color="#ffbcaa"style={{background:"rgb(97 218 251)"}}>
                    <div className="wave" data-progress="70%"></div>
                  </div>
                  <div className="card-footer bg-white">
                    <h4 className="card-title">React.js</h4>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card skillCard shadow text-center position-relative">
                  <img src="/images/skills/Bootstrap_logo.svg" alt="" />
                  <div className="position-relative rounded-top progress-wrapper" data-color="#ffbcaa"style={{background:"rgb(122 17 247)"}}>
                    <div className="wave" data-progress="70%"></div>
                  </div>
                  <div className="card-footer bg-white">
                    <h4 className="card-title">Bootstrap</h4>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card skillCard shadow text-center position-relative">
                  <img src="/images/skills/tailwind_css.png" alt="" />
                  <div className="position-relative rounded-top progress-wrapper" data-color="#ffbcaa"style={{background:"rgb(73 174 180)"}}>
                    <div className="wave" data-progress="70%"></div>
                  </div>
                  <div className="card-footer bg-white">
                    <h4 className="card-title">Tailwind</h4>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card skillCard shadow text-center position-relative">
                  <img src="/images/skills/MySQL-logo.png.webp" alt="" />
                  <div className="position-relative rounded-top progress-wrapper" data-color="#ffbcaa"style={{background:"rgb(0 97 137)"}}>
                    <div className="wave" data-progress="70%"></div>
                  </div>
                  <div className="card-footer bg-white">
                    <h4 className="card-title">MySQL</h4>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card skillCard shadow text-center position-relative">
                  <img src="/images/skills/wordpress.png" alt="" />
                  <div className="position-relative rounded-top progress-wrapper" data-color="#ffbcaa" style={{background:"rgb(67 72 77)"}}>
                    <div className="wave" data-progress="70%"></div>
                  </div>
                  <div className="card-footer bg-white">
                    <h4 className="card-title">WordPress</h4>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card skillCard shadow text-center position-relative">
                  <img src="/images/skills/php.png" alt="" />
                  <div className="position-relative rounded-top progress-wrapper" data-color="#ffbcaa" style={{background:"rgb(120 124 180)"}}>
                    <div className="wave" data-progress="70%"></div>
                  </div>
                  <div className="card-footer bg-white">
                    <h4 className="card-title">php</h4>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card skillCard shadow text-center position-relative">
                  <img src="/images/skills/cypress.webp" alt="" />
                  <div className="position-relative rounded-top progress-wrapper" data-color="#ffbcaa" style={{background:"rgb(34 202 141)"}}>
                    <div className="wave" data-progress="70%"></div>
                  </div>
                  <div className="card-footer bg-white">
                    <h4 className="card-title">cypress</h4>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </section>
      {/* <!-- /skills --> */}
    </>
  );
}

export default MySkills;
