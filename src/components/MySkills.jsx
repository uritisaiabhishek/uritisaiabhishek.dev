import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Skills JSON
const skills = [
  {
    name: "HTML",
    image: "/images/skills/html.png",
    color: "rgb(228 77 38)",
    progress: "90%",
  },
  {
    name: "CSS",
    image: "/images/skills/css.svg",
    color: "rgb(21 114 182)",
    progress: "60%",
  },
  {
    name: "JavaScript",
    image: "/images/skills/javascript.png",
    color: "rgb(247 223 30)",
    progress: "80%",
  },
  {
    name: "Node.js",
    image: "/images/skills/Node.js_logo.svg",
    color: "rgb(116 184 87)",
    progress: "70%",
  },
  {
    name: "React.js",
    image: "/images/skills/react.png",
    color: "rgb(97 218 251)",
    progress: "70%",
  },
  {
    name: "Bootstrap",
    image: "/images/skills/Bootstrap_logo.svg",
    color: "rgb(122 17 247)",
    progress: "70%",
  },
  {
    name: "Tailwind",
    image: "/images/skills/tailwind_css.png",
    color: "rgb(73 174 180)",
    progress: "70%",
  },
  {
    name: "MySQL",
    image: "/images/skills/MySQL-logo.png.webp",
    color: "rgb(0 97 137)",
    progress: "70%",
  },
  {
    name: "WordPress",
    image: "/images/skills/wordpress.png",
    color: "rgb(67 72 77)",
    progress: "70%",
  },
  {
    name: "PHP",
    image: "/images/skills/php.png",
    color: "rgb(120 124 180)",
    progress: "70%",
  },
  {
    name: "Cypress",
    image: "/images/skills/cypress.webp",
    color: "rgb(34 202 141)",
    progress: "70%",
  },
];

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
              className="pb-5"
            >
              {skills.map((skill, index) => (
                <SwiperSlide key={index}>
                  <div className="card skillCard shadow text-center position-relative">
                    <img src={skill.image} alt={skill.name} />
                    <div
                      className="position-relative rounded-top progress-wrapper"
                      style={{ background: skill.color }}
                    >
                      <div className="wave" data-progress={skill.progress}></div>
                    </div>
                    <div className="card-footer bg-white">
                      <h4 className="card-title">{skill.name}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* <!-- /skills --> */}
    </>
  );
}

export default MySkills;
