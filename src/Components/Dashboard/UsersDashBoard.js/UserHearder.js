import React from "react";

const UserHeader = () => {
    
	return (
		<header
			style={{ background: "#22218C", color: "white" }}
			class='main-header header-shaddow'>
			<div class='container-fluid'>
				<div class='main-box'>
					<div class='nav-outer'>
						<div class='logo-box'>
							<div class='logo'>
								<a href='/'>
									<img src='' alt='' title='' />
								</a>
								logo
							</div>
						</div>
					</div>

					<div class='outer-box'>
						<div class='dropdown dashboard-option'>
							<a
								class='dropdown-toggle'
								role='button'
								data-toggle='dropdown'
								aria-expanded='false'>
								<img

                                style = {{
                             
                                    objectFit : "cover"
                                }}
									src='https://i.stack.imgur.com/l60Hf.png'
									alt='avatar'
									class='thumb'
								/>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class='mobile-header'>
				<div class='logo'>
					<a href='index.html'>
						<img src='images/logo.svg' alt='' title='' />
					</a>
				</div>

				<div class='nav-outer clearfix'>
					<div class='outer-box'>
						<div class='login-box'>
							<a href='login-popup.html' class='call-modal'>
								<span class='icon-user'></span>
							</a>
						</div>

						<button id='toggle-user-sidebar'>
							<img
								src='images/resource/company-6.png'
								alt='avatar'
								class='thumb'
							/>
						</button>
						<a href='#nav-mobile' class='mobile-nav-toggler navbar-trigger'>
							<span class='flaticon-menu-1'></span>
						</a>
					</div>
				</div>
			</div>

			<div id='nav-mobile'></div>
		</header>
	);
};

export default UserHeader;
