import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
  return (
    <>
	
		{/* <!-- testimonial --> */}
		<section className="section bg-primary position-relative testimonial-bg-shapes">
		<div className="container">
			<div className="row">
			<div className="col-12 text-center">
				<h2 className="section-title text-white mb-5">Testimonials</h2>
			</div>
			<div className="col-lg-10 mx-auto testimonial-slider">
				<Swiper
				spaceBetween={50}
				slidesPerView={1}
				//   onSlideChange={() => console.log('slide change')}
				//   onSwiper={(swiper) => console.log(swiper)}
				>

					<SwiperSlide>
						
						<div className="text-center testimonial-content">
							<i className="ti-quote-right text-white icon mb-4 d-inline-block"></i>
							<p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit
								in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							<img className="img-fluid rounded-circle mb-4 d-inline-block" src="images/testimonial/client-1.png" alt="client-image" />
							<h4 className="text-white">Jesica Gomez</h4>
							<h6 className="text-light mb-4">CEO, Funder</h6>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						
						<div className="text-center testimonial-content">
							<i className="ti-quote-right text-white icon mb-4 d-inline-block"></i>
							<p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit
								in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							<img className="img-fluid rounded-circle mb-4 d-inline-block" src="images/testimonial/client-1.png" alt="client-image" />
							<h4 className="text-white">Jesica Gomez</h4>
							<h6 className="text-light mb-4">CEO, Funder</h6>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						
						<div className="text-center testimonial-content">
							<i className="ti-quote-right text-white icon mb-4 d-inline-block"></i>
							<p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit
								in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							<img className="img-fluid rounded-circle mb-4 d-inline-block" src="images/testimonial/client-1.png" alt="client-image" />
							<h4 className="text-white">Jesica Gomez</h4>
							<h6 className="text-light mb-4">CEO, Funder</h6>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						
						<div className="text-center testimonial-content">
							<i className="ti-quote-right text-white icon mb-4 d-inline-block"></i>
							<p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit
								in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							<img className="img-fluid rounded-circle mb-4 d-inline-block" src="images/testimonial/client-1.png" alt="client-image" />
							<h4 className="text-white">Jesica Gomez</h4>
							<h6 className="text-light mb-4">CEO, Funder</h6>
						</div>
					</SwiperSlide>

				</Swiper>
				
				
			</div>
			</div>
		</div>
		{/* <!-- bg shapes --> */}
		<img src="images/backgrounds/map.png" alt="map" className="img-fluid bg-map" />
		<img src="images/illustrations/dots-group-v.png" alt="bg-shape" className="img-fluid bg-shape-1" />
		<img src="images/illustrations/leaf-orange.png" alt="bg-shape" className="img-fluid bg-shape-2" />
		<img src="images/illustrations/dots-group-sm.png" alt="bg-shape" className="img-fluid bg-shape-3" />
		<img src="images/illustrations/leaf-pink-round.png" alt="bg-shape" className="img-fluid bg-shape-4" />
		<img src="images/illustrations/leaf-cyan.png" alt="bg-shape" className="img-fluid bg-shape-5" />
		</section>
		{/* <!-- /testimonial --> */}
    
    </>
  )
}

export default Testimonials