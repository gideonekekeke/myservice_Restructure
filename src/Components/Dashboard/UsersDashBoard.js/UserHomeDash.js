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
import {GiComb} from 'react-icons/gi'
import {BiFridge} from 'react-icons/bi'
import {GiSpanner} from 'react-icons/gi'
import pic from "./img/3.png";
import { Link } from "react-router-dom";
const UserHomeDash = () => {
	return (
		<div class='page-wrapper dashboard'>
			<UserHeader />
			<UserSideBar />
			<br />
			<br />
			<section class='user-dashboard'>
				<div class='dashboard-outer'>
					<div class='upper-title-box'>
						<h3>Welcome, Gideon</h3>
						<div class='text'>Client</div>
					</div>
					<div>Service Categories</div>
					<div class='row'>
						<div
							style={{ cursor: "pointer" }}
							class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<Link to='/electrician'>
								<div class='ui-item'>
									<div class='left'>
										<i class='icon'>
											<IoIosBulb />
										</i>
									</div>
									<div class='right'>
										<h4>0</h4>
										<p>Electricians</p>
									</div>
								</div>
							</Link>
						</div>

						<div
							style={{ cursor: "pointer" }}
							class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<Link to = "/plumber">
								<div class='ui-item ui-red'>
									<div class='left'>
										<i class='icon  '>
											<MdOutlinePlumbing />
										</i>
									</div>
									<div class='right'>
										<h4>0</h4>
										<p>Plumbers</p>
									</div>
								</div>
							</Link>
						</div>
						<div
							style={{ cursor: "pointer" }}
							class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item ui-green'>
								<div class='left'>
									<i class='icon  '>
										<MdOutlinePlumbing />
									</i>
								</div>
								<div class='right'>
									<h4>0</h4>
									<p>Painter</p>
								</div>
							</div>
						</div>
						<div
							style={{ cursor: "pointer" }}
							class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item ui-yellow'>
								<div class='left'>
									<i class='icon '>
										<GiGate />
									</i>
								</div>
								<div class='right'>
									<h4>0</h4>
									<p>Welders</p>
								</div>
							</div>
						</div>

						<div
							style={{ cursor: "pointer" }}
							class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item ui-green'>
								<div class='left'>
									<i class='icon '>
										<ImScissors />
									</i>
								</div>
								<div class='right'>
									<h4>0</h4>
									<p>Fashion Designer</p>
								</div>
							</div>
						</div>
						<div
							style={{ cursor: "pointer" }}
							class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item ui-yellow'>
								<div class='left'>
									<i class='icon '>
										<FaHammer />
									</i>
								</div>
								<div class='right'>
									<h4>0</h4>
									<p>Carpenter</p>
								</div>
							</div>
						</div>
						<div
							style={{ cursor: "pointer" }}
							class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item ui-blue'>
								<div class='left'>
									<i class='icon '>
										<GiTrowel />
									</i>
								</div>
								<div class='right'>
									<h4>0</h4>
									<p>BrickLayer</p>
								</div>
							</div>
						</div>
						<div
							style={{ cursor: "pointer" }}
							class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item ui-red'>
								<div class='left'>
									<i class='icon'>
										<GiComb />
									</i>
								</div>
								<div class='right'>
									<h4>0</h4>
									<p>Hair Cut</p>
								</div>
							</div>
						</div>
						<div
							style={{ cursor: "pointer" }}
							class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item ui-blue'>
								<div class='left'>
									<i class='icon '>
										<BiFridge />
									</i>
								</div>
								<div class='right'>
									<h4>0</h4>
									<p>Ac & Refregirator</p>
								</div>
							</div>
						</div>
						<div
							style={{ cursor: "pointer" }}
							class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item ui-red'>
								<div class='left'>
									<i class='icon '>
										<GiSpanner />
									</i>
								</div>
								<div class='right'>
									<h4>0</h4>
									<p>Generator / Car Repairs</p>
								</div>
							</div>
						</div>
						<div
							style={{ cursor: "pointer" }}
							class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item ui-green'>
								<div class='left'>
									<i class='icon'>
										<GiWheelbarrow />
									</i>
								</div>
								<div class='right'>
									<h4>0</h4>
									<p>Truck Pusher</p>
								</div>
							</div>
						</div>
					</div>

					<div class='col-lg-12'>
						<div class='applicants-widget ls-widget'>
							<div class='widget-title'>
								<h4>Booked Service</h4>
							</div>
							<div>table</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default UserHomeDash;
