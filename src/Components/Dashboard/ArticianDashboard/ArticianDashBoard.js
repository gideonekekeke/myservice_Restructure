import axios from "axios";
import React, { useContext } from "react";
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";

import { GlobalContext } from "../../Global/GlobalContext";
import ArtecianHeader from "./ArtecianHeader";
import ArtecianSideBar from "./ArtecianSideBar";
import { BsFillCheckCircleFill } from "react-icons/bs";
const ArticianDashBoard = () => {
	const { current } = useContext(GlobalContext);
	const [userData, setUserData] = React.useState([]);
	const [load, setLoad] = React.useState(true);

	const getData = async () => {
		await axios
			.get("http://localhost:5000/api/book/bookings")
			.then((response) => {
				console.log(response?.data);
				setUserData(response?.data);
				setLoad(false);
			});
	};

	React.useEffect(() => {
		getData();
	}, []);
	return (
		<div class='page-wrapper dashboard'>
			<ArtecianHeader />
			<ArtecianSideBar />
			<br />
			<br />
			<section class='user-dashboard'>
				<div class='dashboard-outer'>
					<div class='upper-title-box'>
						<h3>Welcome, {current?.name}</h3>
						<div class='text'>Artecian</div>
					</div>
					<div class='row'>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item'>
								<div class='left'>
									<i class='icon flaticon-briefcase'></i>
								</div>
								<div class='right'>
									<h4>0</h4>
									<p>Booked</p>
								</div>
							</div>
						</div>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item ui-red'>
								<div class='left'>
									<i class='icon la la-file-invoice'></i>
								</div>
								<div class='right'>
									<h4>0</h4>
									<p>OnGoing</p>
								</div>
							</div>
						</div>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item ui-yellow'>
								<div class='left'>
									<i class='icon la la-comment-o'></i>
								</div>
								<div class='right'>
									<h4>0</h4>
									<p>Done</p>
								</div>
							</div>
						</div>
						<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
							<div class='ui-item ui-green'>
								<div class='left'>
									<i class='icon la la-bookmark-o'></i>
								</div>
								<div class='right'>
									<h4>0</h4>
									<p>Canceled</p>
								</div>
							</div>
						</div>
					</div>

					<div class='row'>
						<div class='col-lg-12'>
							<div class='ls-widget'>
								<div class='tabs-box'>
									<div class='widget-title'>
										<h4> Service Booked</h4>
									</div>

									<div class='widget-content'>
										<div class='table-outer'>
											<table class='default-table manage-job-table'>
												<thead>
													<tr>
														<th>Title</th>
														<th>Materials</th>
														<th>Price(#)</th>
														<th>Status</th>
														<th>Action</th>
													</tr>
												</thead>
												{load ? <ClipLoader size={30} /> : null}
												{userData <= 0 ? <div>No Artecian Booked</div> : null}

												{userData.map((props) => (
													<>
														{props?.sendingTo === current?._id ? (
															<>
																{props.cancel ? null : (
																	<tbody>
																		<tr>
																			<td>
																				<h6> {props?.bookTitle}</h6>
																			</td>
																			<td>{props?.Desc}</td>
																			<td> {props?.price} </td>
																			<td>
																				<div class='option-box'>
																					<ul class='option-list'>
																						{props.status ? (
																							<button
																								disabled
																								style={{
																									background: "silver",
																									color: "white",
																									width: "80px",
																									height: "30px",
																									borderRadius: "5px",
																									cursor: "not-allowed",
																								}}
																								data-text='View Aplication'>
																								Approved
																							</button>
																						) : (
																							<button
																								onClick={() => {
																									axios
																										.patch(
																											`http://localhost:5000/api/book/statusUpdate/${props._id}
                                                `,
																											{
																												status: true,
																											},
																										)
																										.then(() => {
																											Swal.fire({
																												icon: "success",
																												title:
																													"Approved Successfully",
																											});
																											window.location.reload();
																										});
																								}}
																								style={{
																									background: "#22218c",
																									color: "white",
																									width: "80px",
																									height: "30px",
																									borderRadius: "5px",
																								}}
																								data-text='View Aplication'>
																								Approve
																							</button>
																						)}
																					</ul>
																				</div>
																			</td>
																			<td>
																				<div class='option-box'>
																					<ul class='option-list'>
																						{props.status && props.done ? (
																							<button
																								style={{
																									background: "silver",
																									color: "white",
																									width: "120px",
																									height: "30px",
																									borderRadius: "5px",
																									cursor: "not-allowed",
																								}}
																								data-text='View Aplication'>
																								Completed{" "}
																								<BsFillCheckCircleFill
																									style={{
																										color: "green",
																									}}
																								/>
																							</button>
																						) : (
																							<>
																								{props.status ? (
																									<button
																										onClick={() => {
																											axios
																												.patch(
																													`http://localhost:5000/api/book/updatingDone/updated/${props._id}
                                                `,
																													{
																														done: true,
																													},
																												)
																												.then(() => {
																													Swal.fire({
																														icon: "success",
																														title:
																															"Project Done",
																													});
																													window.location.reload();
																												});
																										}}
																										style={{
																											background: "red",
																											color: "white",
																											width: "80px",
																											height: "30px",
																											borderRadius: "5px",
																										}}
																										data-text='View Aplication'>
																										Done
																									</button>
																								) : (
																									<button
																										onClick={() => {
																											axios
																												.patch(
																													`http://localhost:5000/api/book/cancelUpdate/${props._id}
                                                `,
																													{
																														cancel: true,
																													},
																												)
																												.then(() => {
																													Swal.fire({
																														icon: "success",
																														title:
																															"Booking Canceled Successfully",
																													});
																													window.location.reload();
																												});
																										}}
																										style={{
																											background: "red",
																											color: "white",
																											width: "80px",
																											height: "30px",
																											borderRadius: "5px",
																										}}
																										data-text='View Aplication'>
																										Cancel
																									</button>
																								)}
																							</>
																						)}
																					</ul>
																				</div>
																			</td>
																		</tr>
																	</tbody>
																)}
															</>
														) : null}
													</>
												))}
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ArticianDashBoard;
