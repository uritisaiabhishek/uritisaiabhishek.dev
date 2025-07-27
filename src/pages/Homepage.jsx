import React from 'react'
import BlogListing from '../components/BlogListing'
import MyClients from '../components/MyClients'
import PortfolioSection from '../components/PortfolioSection'
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router-dom'
import MyEducation from '../components/MyEducation'

import MySkills from '../components/MySkills'
import MyExperience from '../components/MyExperience'
import SocialMedia from '../components/SocialMedia'

function Homepage() {
  return (
    <>
			
		{/* <!-- hero area --> */}
		<section className="hero-area bg-primary" id="parallax">
			<div className="container">
				<div className="row">
				<div className="col-lg-11 mx-auto">
					<h1 className="text-white font-tertiary">Hi! I’m <br /> Uriti Sai Abhishek <br /> Web developer</h1>
				</div>
				</div>
			</div>
			<div className="layer-bg w-100">
				<img className="img-fluid w-100" src="/images/illustrations/leaf-bg.png" alt="bg-shape" />
			</div>
			<div className="layer" id="l2">
				<img src="/images/illustrations/dots-cyan.png" alt="bg-shape" />
			</div>
			<div className="layer" id="l3">
				<img src="/images/illustrations/leaf-orange.png" alt="bg-shape" />
			</div>
			<div className="layer" id="l4">
				<img src="/images/illustrations/dots-orange.png" alt="bg-shape" />
			</div>
			<div className="layer" id="l5">
				<img src="/images/illustrations/leaf-yellow.png" alt="bg-shape" />
			</div>
			<div className="layer" id="l6">
				<img src="/images/illustrations/leaf-cyan.png" alt="bg-shape" />
			</div>
			<div className="layer" id="l7">
				<img src="/images/illustrations/dots-group-orange.png" alt="bg-shape" />
			</div>
			<div className="layer" id="l8">
				<img src="/images/illustrations/leaf-pink-round.png" alt="bg-shape" />
			</div>
			<div className="layer" id="l9">
				<img src="/images/illustrations/leaf-cyan-2.png" alt="bg-shape" />
			</div>
			
			{/* <SocialMedia theme="dark" /> */}
		
		</section>
		{/* <!-- /hero area --> */}

		{/* <!-- about --> */}
		<section className="section">
			<div className="container">
				<div className="row">
				<div className="col-lg-10 mx-auto text-center">
					<p className="font-secondary paragraph-lg text-dark">Creative Full Stack Developer & WordPress Wizard with 3+ years of crafting sleek, scalable web
						solutions. Master of React.js, JavaScript, HTML, CSS, and SCSS, blending killer UI/UX with rock-solid code.
						From designing responsive WordPress themes with Tailwind and Bootstrap to building interactive apps, I
						turn ideas into pixel-perfect realities. Always ahead of the curve, solving problems and delivering
						performance with a touch of flair.</p>
					<Link to="/about" className="btn btn-transparent">know more</Link>
				</div>
				</div>
			</div>
		</section>
		{/* <!-- /about --> */}

		<MySkills />

		<MyExperience />

		{/* <MyEducation /> */}

		{/* <!-- services --> */}
		<section className="section">
			<div className="container">
				<div className="row">
				<div className="col-12 text-center">
					<h2 className="section-title">Services</h2>
				</div>
				<div className="col-md-4 mb-4 mb-md-0">
					<div className="card hover-shadow shadow">
					<div className="card-body text-center px-4 py-5">
						<i className="ti-palette icon mb-5 d-inline-block"></i>
						<h4 className="mb-4">UI Design</h4>
						<p>I create visually appealing and functional user interfaces that enhance the overall user experience. By combining modern design principles with usability, I ensure every design is intuitive, responsive, and aesthetically engaging.</p>
					</div>
					</div>
				</div>
				<div className="col-md-4 mb-4 mb-md-0">
					<div className="card active-bg-primary hover-shadow shadow">
					<div className="card-body text-center px-4 py-5">
						<i className="ti-vector icon mb-5 d-inline-block"></i>
						<h4 className="mb-4">UX Design</h4>
						<p>I focus on understanding user behavior and crafting seamless experiences. My UX process includes research, wireframing, prototyping, and testing to ensure designs meet both user needs and business goals.</p>
					</div>
					</div>
				</div>
				<div className="col-md-4 mb-4 mb-md-0">
					<div className="card hover-shadow shadow">
					<div className="card-body text-center px-4 py-5">
						<i className="ti-panel icon mb-5 d-inline-block"></i>
						<h4 className="mb-4">Interaction Design</h4>
						<p>I design interactive experiences that enhance user engagement. From micro-interactions to complex animations, I ensure smooth transitions and meaningful interactions that make products feel intuitive and dynamic.</p>
					</div>
					</div>
				</div>
				</div>
			</div>
		</section>
		{/* <!-- /services --> */}

		<PortfolioSection />

		{/* <Testimonials /> */}

		<MyClients />

		{/* <BlogListing /> */}

    </>
  )
}

export default Homepage