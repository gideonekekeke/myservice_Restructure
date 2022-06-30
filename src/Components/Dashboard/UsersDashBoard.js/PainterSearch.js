import React from "react";
import UserHeader from "./UserHearder";
import UserSideBar from "./UserSideBar";
import { Link } from "react-router-dom";
import pic from "./img/3.png";
const PainterSearch = () => {
	return (
		<div class='page-wrapper dashboard'>
			<UserHeader />
			<UserSideBar />
			<br />
			<br />
			<section class='user-dashboard'>
				<div class='dashboard-outer'>
					<div>Painter Categories</div>
					<div class='row'>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<Link style={{ color: "black" }} to='/user-map'>
								<div class='ui-item'>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											width: "100%",
										}}
										class='center'>
										<h5>Painting</h5>
									</div>
								</div>
							</Link>
						</div>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<Link style={{ color: "black" }} to='/user-map'>
								<div class='ui-item'>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											width: "100%",
											textAlign: "center",
										}}
										class='center'>
										<h5>POP Screeding</h5>
									</div>
								</div>
							</Link>
						</div>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<Link style={{ color: "black" }} to='/user-map'>
								<div class='ui-item'>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											width: "100%",
										}}
										class='center'>
										<h5>Wallpaper Installation</h5>
									</div>
								</div>
							</Link>
						</div>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<Link style={{ color: "black" }} to='/user-map'>
								<div class='ui-item'>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											width: "100%",
										}}
										class='center'>
										<h5>3D Wallpaper Installation</h5>
									</div>
								</div>
							</Link>
						</div>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<Link style={{ color: "black" }} to='/user-map'>
								<div class='ui-item'>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											width: "100%",
										}}
										class='center'>
										<h5>Stricco Effects</h5>
									</div>
								</div>
							</Link>
						</div>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<Link style={{ color: "black" }} to='/user-map'>
								<div class='ui-item'>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											width: "100%",
										}}
										class='center'>
										<h5>Marble Effects</h5>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PainterSearch;
