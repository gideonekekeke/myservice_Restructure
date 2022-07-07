import React, { useContext } from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import Hearder from "./Hearder";

import { IoIosBulb } from "react-icons/io";
import { MdOutlinePlumbing } from "react-icons/md";
import { GiGate } from "react-icons/gi";
import { ImScissors } from "react-icons/im";
import { FaHammer } from "react-icons/fa";
import { GiWheelbarrow } from "react-icons/gi";
import { GiTrowel } from "react-icons/gi";
import { GiComb } from "react-icons/gi";
import { BiFridge } from "react-icons/bi";
import { GiSpanner } from "react-icons/gi";
import { FaPaintRoller } from "react-icons/fa";
import { GlobalContext } from "./Global/GlobalContext";
import { useNavigate } from "react-router-dom";
import Joyride, { ACTIONS, EVENTS, STATUS } from "react-joyride";
import Footer from "./Footer";
const HomeScreen = () => {
	const { current } = useContext(GlobalContext);
	const hist = useNavigate();
	const ClickSearch = () => {
		if (current) {
			return hist("/user-dashboard");
		} else {
			return hist("/user-register");
		}
	};

	const [stepping, setStepping] = React.useState({
		run: true,
		steps: [
			{
				target: ".btn-box",
				content: "This is my awesome feature!",
			},
			{
				target: ".auto-container",
				content: "This another awesome feature!",
			},
			{
				target: ".btn-box",
				content: `if you are a user looking for an artisan click on the Login/ signup Button...
				if you are an artisan click on the yellow button
				`,
			},
		],

		stepIndex: 2,
	});

	const handleJoyrideCallback = (data) => {
		const { action, index, status, type } = data;
		if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
			// Update state to advance the tour
			setStepping({
				stepIndex: index + (action === ACTIONS.PREV ? -1 : 1),
			});
		} else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
			// Need to set our running state to false, so we can restart if we click start again.
			setStepping({ run: false });
		}

		console.groupCollapsed(type);
		console.log(data); //eslint-disable-line no-console
		console.groupEnd();
	};
	const { run, stepIndex, steps } = stepping;

	React.useEffect(() => {
		if (navigator.geolocation) {
			console.log("Geolocation is supported!");
		} else {
			console.log("Geolocation is not supported for this Browser/OS.");
		}

		const watchID = navigator.geolocation.watchPosition((position) => {
			console.log(position.coords.latitude, position.coords.longitude);
		});

		console.log(watchID);
	}, []);

	return (
		<>
			<Joyride
				callback={handleJoyrideCallback}
				run={run}
				continuous
				stepIndex={stepIndex}
				steps={steps}
				styles={{
					options: {
						primaryColor: "#000",
						width: 500,
						zIndex: 1000,
					},
				}}
			/>
			<Hearder />

			<section
				class='banner-section-nine'
				style={{ backgroundImage: "url(images/background/109.png)" }}>
				<div class='auto-container'>
					<div class='cotnent-box'>
						<div class='title-box wow fadeInUp' data-wow-delay='300ms'>
							<h3>Find Handyman & Artisans Quickly</h3>
							<div class='text'>
								Myservice links you with the best handyman and artisians near
								you.and deliever an amazing job
							</div>
						</div>

						<div class='job-search-form wow fadeInUp' data-wow-delay='600ms'>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									ClickSearch();
								}}>
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
						<div class='text'>Quality Artisans, at your doorstep</div>
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
								Artisan near you.
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
								<h2>FIND A PROFESSIONAL & BOOK A SERVICE</h2>
								<div class='text'>
									Enter the service you require in the search box, fill in the
									necessary details, choose the profession you require for what
									you want to do, and book service, chat, or call.
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

			<section class='job-categories'>
				<div class='auto-container'>
					<div class='sec-title text-center'>
						<h2 style={{ fontWeight: "bold" }}>Our Services</h2>
					</div>

					<div class='row wow fadeInUp'>
						<div class='category-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12'>
							<div class='inner-box'>
								<div class='content'>
									<span class='icon '>
										<IoIosBulb />
									</span>
									<h4>
										<a href='#'>Electrical Repairs</a>
									</h4>
									<p>
										(Needs an expert for fixing any issues at home or office?,
										then Myservice is here for you)
									</p>
								</div>
							</div>
						</div>

						<div class='category-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12'>
							<div class='inner-box'>
								<div class='content'>
									<span class='icon '>
										<FaPaintRoller />
									</span>
									<h4>
										<a href='#'>Painting</a>
									</h4>
									<p>
										(Needs an expert for fixing any issues at home or office?,
										then Myservice is here for you)
									</p>
								</div>
							</div>
						</div>

						<div class='category-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12'>
							<div class='inner-box'>
								<div class='content'>
									<span class='icon '>
										<MdOutlinePlumbing />
									</span>
									<h4>
										<a href='#'>Plumbing</a>
									</h4>
									<p>
										{" "}
										(Needs an expert for fixing any issues at home or office?,
										then Myservice is here for you)
									</p>
								</div>
							</div>
						</div>

						<div class='category-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12'>
							<div class='inner-box'>
								<div class='content'>
									<span class='icon '>
										<GiGate />
									</span>
									<h4>
										<a href='#'>Welding</a>
									</h4>
									<p>
										{" "}
										(Needs an expert for fixing any issues at home or office?,
										then Myservice is here for you)
									</p>
								</div>
							</div>
						</div>

						<div class='category-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12'>
							<div class='inner-box'>
								<div class='content'>
									<span class='icon '>
										<ImScissors />
									</span>
									<h4>
										<a href='#'>Fashion Designing</a>
									</h4>
									<p>
										{" "}
										(Needs an expert for fixing any issues at home or office?,
										then Myservice is here for you)
									</p>
								</div>
							</div>
						</div>

						<div class='category-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12'>
							<div class='inner-box'>
								<div class='content'>
									<span class='icon '>
										<FaHammer />
									</span>
									<h4>
										<a href='#'>Carpentry</a>
									</h4>
									<p>
										{" "}
										(Needs an expert for fixing any issues at home or office?,
										then Myservice is here for you)
									</p>
								</div>
							</div>
						</div>

						<div class='category-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12'>
							<div class='inner-box'>
								<div class='content'>
									<span class='icon'>
										<GiTrowel />
									</span>
									<h4>
										<a href='#'>Brick Layer</a>
									</h4>
									<p>
										{" "}
										(Needs an expert for fixing any issues at home or office?,
										then Myservice is here for you)
									</p>
								</div>
							</div>
						</div>

						<div class='category-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12'>
							<div class='inner-box'>
								<div class='content'>
									<span class='icon'>
										<GiComb />
									</span>
									<h4>
										<a href='#'>Hair Cuts</a>
									</h4>
									<p>
										{" "}
										(Needs an expert for fixing any issues at home or office?,
										then Myservice is here for you)
									</p>
								</div>
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
									<h6>ABOUT US</h6>
									<h2>
										Our Artisans focus on <br />
										providing world-class services.
									</h2>
									<div class='text'>
										Myservices is a web app that serves as a marketplace for
										home services and repairs.
									</div>
								</div>
								<ul class='list-style-one'>
									<li>
										get reliable and consistent and cost-effective services
									</li>
									<li>Schedule a time slot that works for you.</li>
									<li>find credible and skilled service providers,</li>
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
											<img
												style={{
													height: "100%",
													width: "100%",
													objectFit: "cover",
												}}
												src='images/resource/11.jpg'
												alt=''
											/>
										</figure>
										<h4 class='name'>Brooklyn Simmons</h4>
										<span class='designation'>Carpenter</span>
									</li>

									<li class='applicant'>
										<figure class='image'>
											<img
												style={{
													height: "100%",
													width: "100%",
													objectFit: "cover",
												}}
												src='images/resource/15.jpg'
												alt=''
											/>
										</figure>
										<h4 class='name'>Emmanuel Ebuka</h4>
										<span class='designation'>Welder</span>
									</li>

									<li class='applicant'>
										<figure class='image'>
											<img
												style={{
													height: "100%",
													width: "100%",
													objectFit: "cover",
												}}
												src='images/resource/13.jpg'
												alt=''
											/>
										</figure>
										<h4 class='name'>Chibuzor Udeme</h4>
										<span class='designation'>Electrician</span>
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
						<h2>Our Professionals Working</h2>
					</div>

					<div class='row wow fadeInUp'>
						<div class='news-block col-lg-4 col-md-6 col-sm-12'>
							<div class='inner-box'>
								<div class='image-box'>
									<figure class='image'>
										<img src='images/resource/12.jpg' alt='' />
									</figure>
								</div>
								<div class='lower-content'>
									<ul class='post-meta'></ul>
									<h3>
										<a href='#'>Franklin James</a>
									</h3>
									<p class='text'>
										This is where Myservice helps you. Once you sign up,
									</p>
								</div>
							</div>
						</div>
						<div class='news-block col-lg-4 col-md-6 col-sm-12'>
							<div class='inner-box'>
								<div class='image-box'>
									<figure class='image'>
										<img src='images/resource/13.jpg' alt='' />
									</figure>
								</div>
								<div class='lower-content'>
									<h3>
										<a href='#'>Chibuzor Udeme</a>
									</h3>
									<p class='text'>
										This is where Myservice helps you. Once you sign up,
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
											src='images/resource/15.jpg'
											alt=''
										/>
									</figure>
								</div>
								<div class='lower-content'>
									<h3>
										<a href='#'>Emmanuel Ebuka</a>
									</h3>
									<p class='text'>
										This is where Myservice helps you. Once you sign up,
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default HomeScreen;
