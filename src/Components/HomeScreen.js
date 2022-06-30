import React from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import Hearder from "./Hearder";

const HomeScreen = () => {

	React.useEffect(()=>{
 if (navigator.geolocation) {
		console.log("Geolocation is supported!");

 } else {
		console.log("Geolocation is not supported for this Browser/OS.");
 }

 const watchID = navigator.geolocation.watchPosition((position) => {
		console.log(position.coords.latitude, position.coords.longitude);
 });

 console.log(watchID)
	}, [])
	return (
		<>
			<Hearder />

			<section
				class='banner-section-nine'
				style={{ backgroundImage: "url(images/background/109.png)" }}>
				<div class='auto-container'>
					<div class='cotnent-box'>
						<div class='title-box wow fadeInUp' data-wow-delay='300ms'>
							<h3>Find Handyman & Artisians Quickly</h3>
							<div class='text'>
								Myservice links you with the best handyman and artisians near
								you.and deliever an amazing job
							</div>
						</div>

						<div class='job-search-form wow fadeInUp' data-wow-delay='600ms'>
							<form method='post' action='job-list-v10.html'>
								<div class='row'>
									<div class='form-group col-lg-4 col-md-12 col-sm-12'>
										<label>What do you want to do?</label>
										<span class='icon flaticon-search-1'></span>
										<input
											type='text'
											name='field_name'
											placeholder='Write a short description of what you want'
										/>
									</div>

									<div class='form-group col-lg-3 col-md-12 col-sm-12 location'>
										<label>Where?</label>
										<span class='icon flaticon-map-locator'></span>
										<ReactGoogleAutocomplete
											aria-required
											style={{}}
											apiKey='AIzaSyBIe8lcH1rTX_sBfYeopfTGOjudCxQoPGo'
											onPlaceSelected={(place) => {
												console.log(place);
											}}
										/>
									</div>

									<div class='form-group col-lg-3 col-md-12 col-sm-12 category'>
										<label>Categories</label>
										<span class='icon flaticon-briefcase'></span>
										<select class='chosen-select'>
										
											<option value='Welder'>Welder</option>
											<option value='Painter'>Painter</option>
											<option value='Plumber'>Plumber</option>
											<option value='Carpenter'>Carpenter</option>
											<option value='Electrician'>Electrician</option>
											<option value='Fashion Designer'>Fashion Designer</option>
											<option value='Brick Layer'>Brick Layer</option>
											<option value='Truck Pusher'>Truck Pusher</option>
											<option value='Hair Cut'>Hair Cut</option>
											<option value='Ac & Refrigerator'>
												Ac & Refrigerator
											</option>
											<option value='Genrator & Car'>Genrator & Car</option>
										</select>
									</div>

									<div class='form-group col-lg-2 col-md-12 col-sm-12 text-right'>
										<button type='submit' class='theme-btn btn-style-two'>
											Search
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<br />
			<br />
			<section class='process-section pt-0'>
				<div class='auto-container'>
					<div class='sec-title text-center'>
						<h2>How It Works?</h2>
						<div class='text'>Quality Aticians, at your doorstep</div>
					</div>

					<div class='row wow fadeInUp'>
						<div class='process-block col-lg-4 col-md-6 col-sm-12'>
							<div class='icon-box'>
								<img src='images/resource/process-1.png' alt='' />
							</div>
							<h4>
								Register an account <br />
								to start
							</h4>
						</div>

						<div class='process-block col-lg-4 col-md-6 col-sm-12'>
							<div class='icon-box'>
								<img src='images/resource/process-2.png' alt='' />
							</div>
							<h4>
								Explore over thousands <br />
								of Articians or handyman
							</h4>
						</div>

						<div class='process-block col-lg-4 col-md-6 col-sm-12'>
							<div class='icon-box'>
								<img src='images/resource/process-3.png' alt='' />
							</div>
							<h4>
								Find the most suitable <br />
								Artician near you.
							</h4>
						</div>
					</div>
				</div>
			</section>

			<section
				style={{ backgroundImage: "url(images/background/109.png)" }}
				class='call-to-action-two overlay-black-60'>
				<div class='auto-container wow fadeInUp'>
					<div class='row grid-base justify-content-center'>
						<div class='col-lg-6 col-md-10'>
							<div class='sec-title light text-center'>
								<h2>Make Recruiting Your Competitive Advantage</h2>
								<div class='text'>
									Superio offers a way to completely optimize your entire
									recruiting process. Find better candidates, conduct more
									focused interviews, and make data-driven hiring decisions.
								</div>
							</div>

							<div class='btn-box'>
								<a href='#' class='theme-btn btn-white-type-2'>
									GET STARTED
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class='about-section-two style-two'>
				<div class='auto-container'>
					<div class='row '>
						<div class='content-column col-lg-6 col-md-12 col-sm-12 order-2'>
							<div class='inner-column wow fadeInLeft'>
								<div class='sec-title'>
									<h2>
										Get applications from the <br />
										world best talents.
									</h2>
									<div class='text'>
										Search all the open positions on the web. Get your own
										personalized salary estimate. Read reviews on over 600,000
										companies worldwide.
									</div>
								</div>
								<ul class='list-style-one'>
									<li>Bring to the table win-win survival</li>
									<li>Capitalize on low hanging fruit to identify</li>
									<li>But I must explain to you how all this</li>
								</ul>
								<a
									style={{ backgroundColor: "#F8AA00" }}
									href='#'
									class='theme-btn btn-style-seven'>
									Get Started
								</a>
							</div>
						</div>

						<div class='image-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight'>
							<figure class='image-box'>
								<img src='images/background/109.png' alt='' />
							</figure>

							<div class='applicants-list'>
								<div style={{ backgroundColor: "#22218C" }} class='title-box'>
									<h4>Articians </h4>
								</div>
								<ul class='applicants'>
									<li class='applicant'>
										<figure class='image'>
											<img src='images/resource/applicant-1.png' alt='' />
										</figure>
										<h4 class='name'>Brooklyn Simmons</h4>
										<span class='designation'>Electrician</span>
									</li>

									<li class='applicant'>
										<figure class='image'>
											<img src='images/resource/applicant-2.png' alt='' />
										</figure>
										<h4 class='name'>Emmanuel Ebuka</h4>
										<span class='designation'>Plumber</span>
									</li>

									<li class='applicant'>
										<figure class='image'>
											<img src='images/resource/applicant-3.png' alt='' />
										</figure>
										<h4 class='name'>Julius Agbo</h4>
										<span class='designation'>Carpenter</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class='news-section style-two'>
				<div class='auto-container'>
					<div class='sec-title text-center'>
						<h2>Our Trusted Agents</h2>
					</div>

					<div class='row wow fadeInUp'>
						<div class='news-block col-lg-4 col-md-6 col-sm-12'>
							<div class='inner-box'>
								<div class='image-box'>
									<figure class='image'>
										<img src='images/resource/24.jpg' alt='' />
									</figure>
								</div>
								<div class='lower-content'>
									<ul class='post-meta'></ul>
									<h3>
										<a href='blog-single.html'>Peter Oti</a>
									</h3>
									<p class='text'>
										A job ravenously while Far much that one rank beheld after
										outside....
									</p>
								</div>
							</div>
						</div>
						<div class='news-block col-lg-4 col-md-6 col-sm-12'>
							<div class='inner-box'>
								<div class='image-box'>
									<figure class='image'>
										<img src='images/resource/23.jpg' alt='' />
									</figure>
								</div>
								<div class='lower-content'>
									<h3>
										<a href='blog-single.html'>Anyamah Ndidi</a>
									</h3>
									<p class='text'>
										A job ravenously while Far much that one rank beheld after
										outside....
									</p>
								</div>
							</div>
						</div>

						<div class='news-block col-lg-4 col-md-6 col-sm-12'>
							<div class='inner-box'>
								<div class='image-box'>
									<figure class='image'>
										<img
											style={{ height: "100%" }}
											src='images/resource/26.jpg'
											alt=''
										/>
									</figure>
								</div>
								<div class='lower-content'>
									<h3>
										<a href='blog-single.html'>Samuel Kelechi</a>
									</h3>
									<p class='text'>
										A job ravenously while Far much that one rank beheld after
										outside....
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeScreen;
