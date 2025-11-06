import React, { useEffect } from 'react'
import MyClients from '../components/MyClients'
import PageTitle from '../components/PageTitle'
import SocialMedia from '../components/SocialMedia'

function About() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  return (
    <>
      <PageTitle title="About me" />

      {/* About Section */}
      <section className="section pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <p>
                Creative Full Stack Developer & WordPress Wizard with 3+ years of crafting sleek, scalable web solutions.
                Master of React.js, JavaScript, HTML, CSS, and SCSS, blending killer UI/UX with rock-solid code.
                From designing responsive WordPress themes with Tailwind and Bootstrap to building interactive apps,
                I turn ideas into pixel-perfect realities. Always ahead of the curve, solving problems and delivering
                performance with a touch of flair.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <div className="shadow-down mb-4">
                <img
                  src="/images/about/uritisaiabhishek.JPG"
                  alt="Uriti Sai Abhishek"
                  className="img-fluid w-100 rounded-lg border-thick border-white"
                />
              </div>
              <h4>Uriti Sai Abhishek</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-around text-center">
            <div className="col-lg-12">
              <h2 className="section-title">Work Process</h2>
            </div>

            <div className="col-lg-3 col-md-4 hover-shadow pt-3">
              <img src="/images/icons/plan.png" className="mb-4" alt="Planning Icon" />
              <h4 className="mb-4">Research and Plan</h4>
              <p>
                Every project starts with thorough research and planning. I analyze user needs, market trends,
                and business objectives to create a solid foundation for design. This includes competitor analysis,
                user personas, and journey mapping.
              </p>
            </div>

            <div className="col-lg-3 col-md-4 hover-shadow pt-3">
              <img src="/images/icons/design.png" className="mb-4" alt="Design Icon" />
              <h4 className="mb-4">Design and Develop</h4>
              <p>
                Using research insights, I craft user-friendly designs that are both visually appealing and
                functionally efficient. This includes wireframing, prototyping, and iterative testing to refine
                the user experience before development.
              </p>
            </div>

            <div className="col-lg-3 col-md-4 hover-shadow pt-3">
              <img src="/images/icons/print.png" className="mb-4" alt="Delivery Icon" />
              <h4 className="mb-4">Deliver</h4>
              <p>
                The final step is ensuring a smooth and polished delivery. I provide high-quality, production-ready
                solutions with documentation and offer post-launch support to optimize based on feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          
          {/* Credly Badge */}
          <div
            data-iframe-width="320"
            data-iframe-height="270"
            data-share-badge-id="0c2168d3-44c9-4899-9c0a-fa7dc43d5a3c"
            data-share-badge-host="https://www.credly.com"
          ></div>
          
        </div>
      </section>


      <MyClients />
      <SocialMedia />
    </>
  )
}

export default About
