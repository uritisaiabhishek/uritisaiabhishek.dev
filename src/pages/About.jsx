import React from 'react'
import MyClients from '../components/MyClients'
import PageTitle from '../components/PageTitle'
import SocialMedia from '../components/SocialMedia'

function About() {
  return (
    <>
      <PageTitle title="About me" />

      {/* <!-- about --> */}
      <section className="section pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p>Creative Full Stack Developer & WordPress Wizard with 3+ years of crafting sleek, scalable web solutions. Master of React.js, JavaScript, HTML, CSS, and SCSS, blending killer UI/UX with rock-solid code. From designing responsive WordPress themes with Tailwind and Bootstrap to building interactive apps, I turn ideas into pixel-perfect realities. Always ahead of the curve, solving problems and delivering performance with a touch of flair.</p>
            </div>
            <div className="col-md-4 text-center drag-lg-top">
              <div className="shadow-down mb-4">
                <img src="images/about/uritisaiabhishek.JPG" alt="author" className="img-fluid w-100 rounded-lg border-thick border-white" />
              </div>
              <h4>Uriti Sai Abhishek</h4>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /about --> */}

      {/* <!-- Work Process --> */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Work Process</h2>
            </div>
            <div className="col-lg-3 col-md-4 text-center hover-shadow pt-3">
              <div className="">
                <img src="images/icons/plan.png" className="mb-4" alt="icon" />
                <h4 className="mb-4">Research and Plan</h4>
                <p>Every project starts with thorough research and planning. I analyze user needs, market trends, and business objectives to create a solid foundation for design. This step involves competitor analysis, user personas, and journey mapping.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 text-center hover-shadow pt-3">
              <img src="images/icons/design.png" className="mb-4" alt="icon" />
              <h4 className="mb-4">Design and Develop</h4>
              <p>Using research insights, I craft user-friendly designs that are both visually appealing and functionally efficient. This phase includes wireframing, prototyping, and iterative testing to refine the user experience before development.</p>
            </div>
            <div className="col-lg-3 col-md-4 text-center hover-shadow pt-3">
              <img src="images/icons/print.png" className="mb-4" alt="icon" />
              <h4 className="mb-4">Deliver</h4>
              <p>he final step is ensuring a smooth and polished delivery. I provide high-quality, production-ready designs with necessary documentation. I also offer post-launch support to optimize and improve the product based on user feedback.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ./Work Process --> */}
      
      <MyClients />

    </>
  )
}

export default About