import React from "react";
import UserHeader from "./UserHearder";
import UserSideBar from "./UserSideBar";
import { Link } from "react-router-dom";
import pic from "./img/3.png";
const CarpenterSearch = () => {
	return (
		<div class='page-wrapper dashboard'>
			<UserHeader />
			<UserSideBar />
			<br />
			<br />
			<section class='user-dashboard'>
				<div class='dashboard-outer'>
					<div>Carpenter Categories</div>
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
										<h5>House Zinc / Roofs</h5>
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
										<h5>Door</h5>
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
										<h5>Funiture Repair</h5>
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
										<h5>Wall Drill & Hang</h5>
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
										<h5>CupBoard & Drawer</h5>
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
										<h5>Bed</h5>
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
										<h5>Balcony</h5>
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

export default CarpenterSearch;
