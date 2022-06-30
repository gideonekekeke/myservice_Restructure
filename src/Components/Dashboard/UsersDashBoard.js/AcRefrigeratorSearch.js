import React from "react";
import UserHeader from "./UserHearder";
import UserSideBar from "./UserSideBar";

import pic from "./img/3.png";
const AcRefrigeratorSearch = () => {
	return (
		<div class='page-wrapper dashboard'>
			<UserHeader />
			<UserSideBar />
			<br />
			<br />
			<section class='user-dashboard'>
				<div class='dashboard-outer'>
					<div>Ac & Refrigerator Categories</div>
					<div class='row'>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item'>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
									}}
									class='center'>
									<h5>Refrigerator</h5>
								</div>
							</div>
						</div>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
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
									<h5>Freezer</h5>
								</div>
							</div>
						</div>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item'>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
                                        textAlign : 'center'
									}}
									class='center'>
									<h5>AC Installation / Unistallation</h5>
								</div>
							</div>
						</div>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item'>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
									}}
									class='center'>
									<h5>Ac Repairs</h5>
								</div>
							</div>
						</div>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item'>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
									}}
									class='center'>
									<h5>AC Service</h5>
								</div>
							</div>
						</div>
					
					</div>
				</div>
			</section>
		</div>
	);
};

export default AcRefrigeratorSearch;
