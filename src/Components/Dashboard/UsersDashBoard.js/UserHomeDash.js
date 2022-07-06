import React, { useContext } from "react";
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
import { FaPaintRoller } from "react-icons/fa";
import pic from "./img/3.png";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Global/GlobalContext";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { searching, sendingUser } from "../../Global/actions";
import Swal from "sweetalert2";
import Loading from "../../LoadState";
import { ClipLoader } from "react-spinners";
import { BsFillCheckCircleFill } from "react-icons/bs";
import BookingDetails from "./BookingDetails";
const UserHomeDash = () => {
	const { current, setShowResult, showResult, setShowAllResult } =
		useContext(GlobalContext);
	const hist = useNavigate();
	const dataValue = useSelector((state) => state.persistedReducer.serchValue);
	const readUser = useSelector((state) => state.persistedReducer.current);
	const [data, setData] = React.useState([]);
	const [load, setLoad] = React.useState(true);
	const [loading, setLoading] = React.useState(false);
	const [userData, setUserData] = React.useState([]);
	const [toggleDetail, setToggleDetail] = React.useState(false);

	const changeDetail = () => {
		setToggleDetail(!toggleDetail);
	};

	const dispatch = useDispatch();

	const getData = async () => {
		await axios
			.get("https://myserviceprojectapi.herokuapp.com/api/artician")
			.then((response) => {
				console.log(response.data.data);
				setData(response.data.data);
			});
	};

	const gettingUser = async () => {
		await axios
			.get(`https://myserviceprojectapi.herokuapp.com/api/user/${readUser._id}`)
			.then((response) => {
				setLoad(false);
				console.log("main userdatahdfhdf", response.data.data);
				setUserData(response.data.data);
			});
	};

	const toggleLoad = () => {
		setLoading(true);
	};

	React.useEffect(() => {
		getData();
		gettingUser();
	}, [current]);

	const submit = async () => {
		try {
			await axios
				.get(
					`https://myserviceprojectapi.herokuapp.com/api/artician/quering/query?search=${dataValue}`,
				)
				.then((result) => {
					console.log("this is the datadfgyhjyt", result.data[0]);

					setLoading(false);

					setShowAllResult(result.data);

					setShowResult(
						result.data[
							Math.floor(
								(Math.random() * result.data.length) % result.data.length,
							)
						],
					);
					console.log(
						"getting something",
						result.data[
							Math.floor(
								(Math.random() * result.data.length) % result.data.length,
							)
						],
					);
					console.log(
						"counts",
						Math.floor(
							(Math.random() * result.data.length) % result.data.length,
						),
					);
					console.log("artecian serached", result);
				});
		} catch (error) {
			console.log("something went wrong white searching");
			Swal.fire({
				icon: "error",
				title: "something went wrong while searching",
				text: "check your internent connection",
				// footer: '<a href="">Why do I have this issue?</a>'
			}).then(() => {
				hist("/user-dashboard");
				setLoading(false);
			});
			setLoading(false);
		}
	};

	React.useEffect(() => {}, [dataValue, showResult]);

	return (
		<>
			<div>
				{" "}
				{toggleDetail ? <BookingDetails changeDetail={changeDetail} /> : null}
			</div>
			<div class='page-wrapper dashboard'>
				<UserHeader />

				<UserSideBar />
				<section class='user-dashboard'>
					<div class='dashboard-outer'>
						<div class='upper-title-box'>
							<h3>Welcome, {userData?.name}</h3>
							<div class='text'>Client</div>
						</div>
						<div>Service Categories</div>
						<div class='row'>
							<div
								onClick={() => {
									dispatch(searching("Electrician"));
									submit();
								}}
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
											<div>
												<div></div>
											</div>
											<p>Electricians</p>
										</div>
									</div>
								</Link>
							</div>

							<div
								onClick={() => {
									dispatch(searching("Plumber"));
									submit();
								}}
								style={{ cursor: "pointer" }}
								class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
								<Link to='/plumber'>
									<div class='ui-item ui-red'>
										<div class='left'>
											<i class='icon  '>
												<MdOutlinePlumbing />
											</i>
										</div>
										<div class='right'>
											<p>Plumbers</p>
										</div>
									</div>
								</Link>
							</div>
							<div
								onClick={() => {
									dispatch(searching("Painter"));
									submit();
								}}
								style={{ cursor: "pointer" }}
								class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
								<Link to='/painter'>
									<div class='ui-item ui-green'>
										<div class='left'>
											<i class='icon  '>
												<FaPaintRoller />
											</i>
										</div>
										<div class='right'>
											<p>Painter</p>
										</div>
									</div>
								</Link>
							</div>
							<div
								onClick={() => {
									dispatch(searching("Welder"));
									submit();
								}}
								style={{ cursor: "pointer" }}
								class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
								<div class='ui-item ui-yellow'>
									<div class='left'>
										<i class='icon '>
											<GiGate />
										</i>
									</div>
									<div class='right'>
										<p>Welders</p>
									</div>
								</div>
							</div>

							<div
								onClick={() => {
									dispatch(searching("Fashion Designer"));
									submit();
								}}
								style={{ cursor: "pointer" }}
								class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
								<div class='ui-item ui-green'>
									<div class='left'>
										<i class='icon '>
											<ImScissors />
										</i>
									</div>
									<div class='right'>
										<p>Fashion Designer</p>
									</div>
								</div>
							</div>
							<div
								onClick={() => {
									dispatch(searching("Carpenter"));
									submit();
								}}
								style={{ cursor: "pointer" }}
								class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
								<Link to='/carpenter'>
									<div class='ui-item ui-yellow'>
										<div class='left'>
											<i class='icon '>
												<FaHammer />
											</i>
										</div>
										<div class='right'>
											<p>Carpenter</p>
										</div>
									</div>
								</Link>
							</div>
							<div
								onClick={() => {
									dispatch(searching("Brick Layer"));
									submit();
								}}
								style={{ cursor: "pointer" }}
								class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
								<div class='ui-item ui-blue'>
									<div class='left'>
										<i class='icon '>
											<GiTrowel />
										</i>
									</div>
									<div class='right'>
										<p>BrickLayer</p>
									</div>
								</div>
							</div>
							<div
								onClick={() => {
									dispatch(searching("Hair Cut"));
									submit();
								}}
								style={{ cursor: "pointer" }}
								class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
								<Link to='/haircut'>
									<div class='ui-item ui-red'>
										<div class='left'>
											<i class='icon'>
												<GiComb />
											</i>
										</div>
										<div class='right'>
											<p>Hair Cut</p>
										</div>
									</div>
								</Link>
							</div>
							<div
								onClick={() => {
									dispatch(searching("Ac & Refrigerator"));
									submit();
								}}
								style={{ cursor: "pointer" }}
								class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
								<Link to='/ac-refrigeratorsearch'>
									<div class='ui-item ui-blue'>
										<div class='left'>
											<i class='icon '>
												<BiFridge />
											</i>
										</div>
										<div class='right'>
											<p>Ac & Refregirator</p>
										</div>
									</div>
								</Link>
							</div>
							<div
								onClick={() => {
									dispatch(searching("Generator & Car"));
									submit();
								}}
								style={{ cursor: "pointer" }}
								class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
								<Link to='/generator-search'>
									<div class='ui-item ui-red'>
										<div class='left'>
											<i class='icon '>
												<GiSpanner />
											</i>
										</div>
										<div class='right'>
											<p>Generator / Car Repairs</p>
										</div>
									</div>
								</Link>
							</div>
							<div
								onClick={() => {
									dispatch(searching("Truck Pusher"));
									submit();
								}}
								style={{ cursor: "pointer" }}
								class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
								<div class='ui-item ui-green'>
									<div class='left'>
										<i class='icon'>
											<GiWheelbarrow />
										</i>
									</div>
									<div class='right'>
										<p>Truck Pusher</p>
									</div>
								</div>
							</div>
						</div>

						<div class='row'>
							<div class='col-lg-12'>
								<div class='ls-widget'>
									<div class='tabs-box'>
										<div class='widget-title'>
											<h4>Booking Service</h4>
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
													{data?.produ <= 0 ? (
														<div>No Artecian Booked</div>
													) : null}

													{userData?.service?.map((props) => (
														<>
															<tbody>
																<tr>
																	<td>
																		<h6
																			style={{ cursor: "pointer" }}
																			onClick={() => {
																				dispatch(sendingUser(props.sendingTo));
																				changeDetail();
																			}}>
																			{props?.bookTitle}
																		</h6>
																	</td>
																	<td>{props?.Desc}</td>
																	<td> {props?.price} </td>
																	<td>
																		<div class='option-box'>
																			<ul class='option-list'>
																				{props.status ? (
																					<button data-text='View Aplication'>
																						Approved
																						<BsFillCheckCircleFill
																							style={{
																								color: "green",
																							}}
																						/>
																					</button>
																				) : (
																					<button data-text='View Aplication'>
																						Pending...
																					</button>
																				)}
																			</ul>
																		</div>
																	</td>
																	<td>
																		<div class='option-box'>
																			<ul class='option-list'>
																				{props.cancel ? (
																					<button
																						style={{
																							background: "silver",
																							color: "white",
																							width: "80px",
																							height: "30px",
																							borderRadius: "5px",
																							cursor: "not-allowed",
																						}}
																						data-text='View Aplication'>
																						Booking Canceled
																					</button>
																				) : (
																					<>
																						{props.done ? (
																							<button
																								style={{
																									background: "silver",
																									color: "white",
																									width: "80px",
																									height: "30px",
																									borderRadius: "5px",
																									cursor: "not-allowed",
																								}}
																								data-text='View Aplication'>
																								Completed
																							</button>
																						) : (
																							<button
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

export default UserHomeDash;

// <iframe
// 	style={{
// 		background: "#F1F5F4",
// 		borderRadius: "2px",
// 		boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
// 		border: "none",
// 		height: "500px",
// 		width: "100%",
// 	}}
// 	src='https://charts.mongodb.com/charts-project-0-taycg/embed/dashboards?id=62b9da27-2c44-4684-8b2f-fdb03ca956fc&theme=light&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed'></iframe>
