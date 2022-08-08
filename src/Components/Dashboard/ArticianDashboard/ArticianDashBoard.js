import axios from "axios";
import React, { useContext } from "react";
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";

import { GlobalContext } from "../../Global/GlobalContext";
import ArtecianHeader from "./ArtecianHeader";
import ArtecianSideBar from "./ArtecianSideBar";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import CreateSteps from "./CreateSteps";
import { useDispatch } from "react-redux";
import { createStepID } from "../../Global/actions";
const ArticianDashBoard = () => {
	const { current } = useContext(GlobalContext);
	const dispatch = useDispatch();
	const [userData, setUserData] = React.useState([]);
	const [load, setLoad] = React.useState(true);
	const [showSteps, setShowSteps] = React.useState(false);
	const [data, setData] = React.useState([]);
	const readUser = useSelector((state) => state.persistedReducer.current);

	const getData = async () => {
		await axios
			.get("https://myserviceprojectapi.herokuapp.com/api/book/bookings")
			.then((response) => {
				console.log(response?.data);
				setUserData(response?.data);
				setLoad(false);
			});
	};

	const gettingUser = async () => {
		await axios
			.get(
				`https://myserviceprojectapi.herokuapp.com/api/artician/${readUser._id}`,
			)
			.then((response) => {
				setLoad(false);
				console.log("main userdatahdfhdf", response.data.data);
				setData(response.data.data);
			});
	};

	const toggleSteps = () => {
		setShowSteps(!showSteps);
	};

	const checkLength = userData?.map((props) => {
		return props;
		// console.log("maindata", data);
	});

	console.log("this is the currentlength", checkLength);

	const lengthData = checkLength.filter((el) => {
		return el?.sendingTo === current?._id;
	});

	const doneLength = checkLength.filter((el) => {
		return el?.sendingTo === current?._id && el.done;
	});
	const CancelLength = checkLength.filter((el) => {
		return el?.sendingTo === current?._id && el.cancel;
	});

	console.log("fgrdfgggggg", doneLength);

	React.useEffect(() => {
		getData();
		gettingUser();
	}, []);
	return (
		<>
			{showSteps ? <CreateSteps toggleSteps={toggleSteps} /> : null}
			<div class='page-wrapper dashboard'>
				<ArtecianHeader />
				<ArtecianSideBar />

				<section class='user-dashboard'>
					<div class='dashboard-outer'>
						<div class='upper-title-box'>
							<h3>Welcome, {data?.name}</h3>
							<div class='text'>Artisan</div>
						</div>
						<div class='row'>
							<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
								<div class='ui-item'>
									<div class='left'>
										<i class='icon flaticon-briefcase'></i>
									</div>
									<div class='right'>
										<h4>{lengthData?.length}</h4>
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
										<h4>{lengthData?.length}</h4>
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
										<h4>{doneLength?.length}</h4>
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
										<h4>{CancelLength?.length}</h4>
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
															<th>Source</th>
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
																												`https://myserviceprojectapi.herokuapp.com/api/book/statusUpdate/${props._id}
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
																												toggleSteps();
																												dispatch(
																													createStepID(
																														props._id,
																													),
																												);
																											}}
																											style={{
																												background: "#22218C",
																												color: "white",
																												width: "150px",
																												height: "30px",
																												borderRadius: "5px",
																											}}
																											data-text='View Aplication'>
																											Create & view Steps
																										</button>
																									) : (
																										<button
																											onClick={() => {
																												axios
																													.patch(
																														`https://myserviceprojectapi.herokuapp.com/api/book/cancelUpdate/${props._id}
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
		</>
	);
};

export default ArticianDashBoard;

// axios
// 	.patch(
// 		`https://myserviceprojectapi.herokuapp.com/api/book/updatingDone/updated/${props._id}
//                                             `,
// 		{
// 			done: true,
// 		},
// 	)
// 	.then(() => {
// 		Swal.fire({
// 			icon: "success",
// 			title: "Project Done",
// 		});
// 		window.location.reload();
// 	});
