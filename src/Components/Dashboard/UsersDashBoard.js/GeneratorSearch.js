import React from "react";
import { Link } from "react-router-dom";
import UserHeader from "./UserHearder";
import UserSideBar from "./UserSideBar";

const GeneratorSearch = () => {
	return (
		<div class='page-wrapper dashboard'>
			<UserHeader />
			<UserSideBar />
			<br />
			<br />
			<section class='user-dashboard'>
				<div class='dashboard-outer'>
					<div>Genrator & Car Categories</div>
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
											textAlign: "center",
										}}
										class='center'>
										<h5>Small Generator</h5>
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
										<h5>Big Generator</h5>
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
										<h5>Car Repair</h5>
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

export default GeneratorSearch;
