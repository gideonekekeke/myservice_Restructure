import React from "react";
import UserSideBar from "./UserSideBar";
import UserSideBarToggle from "../UsersDashBoard.js/UserSideBarToggle";
import { ImCancelCircle } from "react-icons/im";
const UserHeader = () => {
	const [show, setShow] = React.useState(false);

	const toggleShow = () => {
		setShow(!show);
	};

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
									<img
										style={{
											height: "40px",
											width: "120px",
											objectFit: "cover",
										}}
										src='images/le3.png'
										alt=''
										title=''
									/>
								</a>
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
									style={{
										objectFit: "cover",
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
					<a>
						<img
							style={{
								height: "50px",
								width: "120px",
								objectFit: "cover",
							}}
							src='images/le3.png'
							alt=''
							title=''
						/>
					</a>
				</div>

				<div class='nav-outer clearfix'>
					<div class='outer-box'>
						<button id='toggle-user-sidebar'>
							<img
								style={{
									objectFit: "cover",
								}}
								src='https://i.stack.imgur.com/l60Hf.png'
								alt='avatar'
								class='thumb'
							/>
						</button>

						{show ? (
							<div
								style={{
									zIndex: "1000",
									color: "white",
									fontSize: "25px",
									marginLeft: "70px",
									cursor: "pointer",
								}}>
								<ImCancelCircle onClick={toggleShow} />
							</div>
						) : (
							<a
								onClick={toggleShow}
								style={{ color: "white" }}
								class='mobile-nav-toggler navbar-trigger'>
								<span class='flaticon-menu-1'></span>
							</a>
						)}
					</div>
				</div>
			</div>

			{show ? <UserSideBarToggle /> : null}
		</header>
	);
};

export default UserHeader;
