import React from 'react'
import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


function MyClients() {
	return (
		<>
		
			{/* <!-- clients --> */}
			<section className="section bg-light">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center">
							<h2 className="section-title">My Clients</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							
							<Swiper
								spaceBetween={50}
								slidesPerView={4}
								// onSlideChange={() => console.log('slide change')}
								// onSwiper={(swiper) => console.log(swiper)}
								>

								<SwiperSlide>
									<Link to="/contact" className="text-center d-block outline-0 p-4 client_logo_slide">
										<img className="d-unset img-fluid" src="/images/clients-logo/ntn.webp" alt="client-logo" />
									</Link>
								</SwiperSlide>
								

								<SwiperSlide>
									<Link to="/contact" className="text-center d-block outline-0 p-4 client_logo_slide">
										<img className="d-unset img-fluid" src="/images/clients-logo/srk_charity.png" alt="client-logo" />
									</Link>
								</SwiperSlide>

								<SwiperSlide>
									<Link to="/contact" className="text-center d-block outline-0 p-4 client_logo_slide">
										<img className="d-unset img-fluid" src="/images/clients-logo/ecorpbussiness.png" alt="ecorpbussiness" />
									</Link>
								</SwiperSlide>

								<SwiperSlide>
									<a href="https://test-project-933ee.web.app/" className="text-center d-block outline-0 p-4 client_logo_slide">
										<img className="d-unset img-fluid" src="/images/clients-logo/savoris.png" alt="client-logo" />
									</a>
								</SwiperSlide>

							</Swiper>
							
						</div>
					</div>
				</div>
			</section>
			{/* <!-- /clients --> */}
		
		</>
	)
}

export default MyClients