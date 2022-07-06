import React from "react";
import { Link } from "react-router-dom";

const Hearder = () => {
	return (
		<header class='main-header header-style-two alternate2'>
			<div class='auto-container'>
				<div class='main-box'>
					<div class='nav-outer'>
						<div class='logo-box'>
							<div class='logo'>
								<a
									style={{
										color: "white",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
									href='/'>
									<img
										style={{
											height: "50px",
											width: "120px",
											objectFit: "cover",
										}}
										src='images/le3.png'
										alt=''
										title=''
									/>{" "}
								</a>
								<br />
							</div>
						</div>

						<nav class='nav main-menu'>
							<ul class='navigation' id='navbar'>
								<li>
									<span>Home</span>
								</li>

								<li>
									<span>About us</span>
								</li>

								<li class='mm-add-listing'>
									<a href='/' class='theme-btn btn-style-one'>
										Register as an Agent
									</a>
									<span>
										<span class='contact-info'>
											<span class='phone-num'>
												<span>Call us</span>
												<a href='tel:1234567890'>123 456 7890</a>
											</span>
											<span class='address'>
												329 Queensberry Street, North Melbourne VIC <br />
												3051, Australia.
											</span>
											<a href='mailto:support@superio.com' class='email'>
												support@superio.com
											</a>
										</span>
										<span class='social-links'>
											<a href='#'>
												<span class='fab fa-facebook-f'></span>
											</a>
											<a href='#'>
												<span class='fab fa-twitter'></span>
											</a>
											<a href='#'>
												<span class='fab fa-instagram'></span>
											</a>
											<a href='#'>
												<span class='fab fa-linkedin-in'></span>
											</a>
										</span>
									</span>
								</li>
							</ul>
						</nav>
					</div>

					<div class='outer-box'>
						<div class='btn-box'>
							<Link to='/user-register'>
								<a class='theme-btn btn-style-six call-modal'>
									Login / Register
								</a>
							</Link>
							<Link to='/register-artecian'>
								<a class='theme-btn btn-style-two'>
									<span style={{ color: "white" }} class='btn-title'>
										Register as an Artisian
									</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div class='mobile-header'>
				<div class='logo'>
					<a href='/'>
						<img
							style={{
								height: "50px",
								width: "100px",
								objectFit: "cover",
							}}
							src='images/le3.png'
							alt=''
							title=''
						/>
					</a>
				</div>

				<div style={{ display: "flex" }}>
					<div class='btn-box'>
						<Link to='/user-register'>
							<a
								style={{ width: "47%", fontSize: "12px", height: "40px" }}
								class='theme-btn btn-style-six call-modal'>
								Login / Register
							</a>
						</Link>
						<Link to='/register-artecian'>
							<a
								style={{
									width: "50%",
									fontSize: "10px",
									height: "40px",
									color: "white",
									marginLeft: "5px",
								}}
								class='theme-btn btn-style-two'>
								<span class='btn-title'>Register as an Artisian</span>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hearder;
