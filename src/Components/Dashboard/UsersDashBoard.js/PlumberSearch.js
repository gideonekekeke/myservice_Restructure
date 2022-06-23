import React from "react";
import UserHeader from "./UserHearder";
import UserSideBar from "./UserSideBar";
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
import pic from "./img/3.png";
const PlumberSearch = () => {
	return (
		<div class='page-wrapper dashboard'>
			<UserHeader />
			<UserSideBar />
			<br />
			<br />
			<section class='user-dashboard'>
				<div class='dashboard-outer'>
					<div>Plumbering Categories</div>
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
									<h5>Toilets</h5>
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
									<h5>Basin & Sink</h5>
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
									<h5>Pumps</h5>
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
									<h5>Tap & Mixer</h5>
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
									<h5>Bath Fitting</h5>
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
									<h5>Drainage Pipes</h5>
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
									<h5>Water Pipe Connection</h5>
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
									<h5>Basin & Sink</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PlumberSearch;
