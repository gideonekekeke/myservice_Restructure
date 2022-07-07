import React, { useContext } from "react";

import moment from "moment";
import { io } from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsers } from "./Global/actions";
import UserHeader from "./Dashboard/UsersDashBoard.js/UserHearder";
import UserSideBar from "./Dashboard/UsersDashBoard.js/UserSideBar";
import { GlobalContext } from "./Global/GlobalContext";
const Messages = () => {
	const hist = useNavigate();
	const { current } = useContext(GlobalContext);
	const readData = useSelector((state) => state?.persistedReducer.MainUser);

	console.log("na me", readData);
	const readData2 = useSelector((state) => state?.persistedReducer?.otherUser);

	console.log("reading", readData);
	const dispatch = useDispatch();
	const [data, setData] = React.useState([]);
	const [message, setMessage] = React.useState("");
	const [show, setShow] = React.useState(false);
	const myId = current?._id;

	console.log("am getting the current user now", current);
	const [load, setLoad] = React.useState(true);
	const [holdData, setHoldData] = React.useState();
	const [dataFriend, setDataFriend] = React.useState([]);
	const [allFriend, setAllFriend] = React.useState([]);
	const [manyU, setManyU] = React.useState([]);
	const [ChatH, setChatH] = React.useState([]);

	const myFubc = () => {
		setMessage("");
	};

	const url = "https://myserviceprojectapi.herokuapp.com";
	const fetchDetails = async () => {
		await axios
			.get(`https://myserviceprojectapi.herokuapp.com/api/user/${current._id}`)
			.then((response) => {
				// console.log("see what am getting ohhddd", response);
				setData(response?.data?.data);
			});
		setLoad(false);
	};
	const fetchAllUsers = async () => {
		await axios
			.get(`https://myserviceprojectapi.herokuapp.com/api/user`)

			.then((response) => {
				// console.log("get the many", response);

				setManyU(response?.data?.data);
			});
		setLoad(false);
	};

	const pastData = {
		message: message,
		sendTo: readData?.addedID,
		sendingUser: "ty4t",
	};
	const pastData2 = {
		message: message,
		sendTo: readData2?._id,
		sendingUser: "dge",
	};

	const ChatMessage = async (e) => {
		// e.preventDefault();
		await axios
			.post(
				`https://myserviceprojectapi.herokuapp.com/${readData._id}/chat`,
				pastData,
			)

			.then((response) => {
				if (response.status === 201) {
					myFubc();
				}
				myFubc();
				// window.location.reload();
				// console.log("get users now", response);
			});
		setMessage(message);
	};
	const ChatMessage2 = async (e) => {
		// e.preventDefault();
		await axios
			.post(
				`https://myserviceprojectapi.herokuapp.com/${readData._id}/chat`,
				pastData2,
			)
			.then((response) => {
				if (response.status === 201) {
					myFubc();
				}
				myFubc();
				// window.location.reload();
				// console.log("get users now", response);
			});
		setMessage(message);
	};

	const GettAllChat = async () => {
		await axios.get(url).then((response) => {
			console.log("geting all canmessages", response);
			setChatH(response?.data);
		});
	};
	const getFriends = async () => {
		if (readData) {
			await axios
				.get(
					`https://myserviceprojectapi.herokuapp.com/api/user/${readData._id}/friending`,
				)

				.then((response) => {
					// console.log("AM GETTING FRIENDSrfyfhyttyrt", response);

					setDataFriend(response?.data?.data?.conversation);
				});
			setLoad(false);
		} else {
			console.log("still loading");
		}
	};

	const toggleShow = () => {
		setShow(true);
	};
	const getAllFriends = async () => {
		await axios
			.get(`https://myserviceprojectapi.herokuapp.com/api/user/friends/all`)

			.then((response) => {
				// console.log("this are the friends oooojhbgvcvghjhgj", response?.data);

				setAllFriend(response?.data);
			});
		setLoad(false);
	};
	const customId = "custom-id-yes";

	const socket = io(url);

	socket.on("observer", (data) => {
		// console.log("socket new data vgnposted", data);

		if (data?.sendTo === current?._id) {
			toast.success(`you have one new message`, {
				position: "top-right",
				autoClose: false,
				toastId: customId,
				icon: "🚀",
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			// swal({
			// 	title: " Success",
			// 	text: "A message has been sent to your email address to confirm your account",
			// 	icon: "success",
			// });

			console.log("incoming message for you");
		}
		setChatH([...ChatH, data]);
	});

	React.useEffect(() => {
		fetchDetails();

		const LocalData = JSON.parse(window.localStorage.getItem("deta"));
		console.log(LocalData?.userName);
		setHoldData(LocalData);
		getFriends();
		fetchAllUsers();
		getAllFriends();
		GettAllChat();

		// console.log("this is socked friend", allFriend);
	}, [myId, readData, current]);
	return (
		<div class='page-wrapper dashboard'>
			<UserHeader />
			<UserSideBar />

			<section class='user-dashboard'>
				<div class='dashboard-outer'>
					<div
						style={{
							display: "flex",
							justifyContent: "center",

							alignItems: "center",

							width: "100%",
							height: "100%",
						}}
						class='py-5'>
						<div
							style={{
								display: "flex",
								justifyContent: "center",

								alignItems: "center",

								width: "100%",
								height: "100%",
							}}
							class='container'>
							<div
								style={{
									display: "flex",
									justifyContent: "center",

									alignItems: "center",

									width: "100%",
									height: "100%",
								}}
								class='row'>
								<main class=''>
									<div
										style={{
											display: 'justifyContent : "center',
											alignItems: "center",
											background: "red",
											width: "100%",
											height: "100%",
										}}
										class='box shadow-sm rounded bg-white mb-3 osahan-chat'>
										<h5 class='pl-3 pt-3 pr-3 border-bottom mb-0 pb-3'>
											Messaging
										</h5>{" "}
										<div class='row m-0'>
											<div class='border-right col-lg-5 col-xl-4 px-0'>
												<div class='osahan-chat-left'>
													<div class='position-relative icon-form-control p-3 border-bottom'>
														<i class='fa fa-search position-absolute'></i>
														<input
															placeholder='Search messages'
															type='text'
															class='form-control'
														/>
													</div>
													<div class='osahan-chat-list'>
														{data?.friends?.map((props) => (
															<>
																<div
																	style={{ cursor: "pointer" }}
																	onClick={() => {
																		toggleShow();
																		dispatch(allUsers(props));
																		localStorage.setItem(
																			"deta",
																			JSON.stringify(props),
																		);
																	}}
																	class='p-3 d-flex align-items-center bg-light border-left border-primary  border-bottom osahan-post-header overflow-hidden'>
																	<div class='dropdown-list-image mr-3'>
																		<img
																			style={{ objectFit: "cover" }}
																			class='rounded-circle'
																			src={props?.userImage}
																			alt=''
																		/>
																	</div>
																	<div
																		style={{ marginLeft: "10px" }}
																		class='font-weight-bold mr-1 overflow-hidden'>
																		<div class='text-truncate'>
																			{props?.userName}
																		</div>
																	</div>
																</div>
															</>
														))}
													</div>
												</div>
											</div>
											{show ? (
												<div class='col-lg-7 col-xl-8 px-0'>
													<div class='p-3 d-flex align-items-center  border-bottom osahan-post-header'>
														<div class='font-weight-bold mr-1 overflow-hidden'>
															{data?.isDeveloper ? (
																<div class='text-truncate'>
																	{readData2?.name}
																</div>
															) : (
																<div class='text-truncate'>
																	{readData?.userName}
																</div>
															)}
															<div class='small text-truncate overflow-hidden text-black-50'>
																typing...
															</div>
														</div>

														<span class='ml-auto'>
															<button
																type='button'
																class='btn btn-light btn-sm rounded'>
																<i class='mdi mdi-phone'></i>
															</button>
															<button
																type='button'
																class='btn btn-light btn-sm rounded'>
																<i class='mdi mdi-video'></i>
															</button>
															<div class='btn-group'>
																<button
																	type='button'
																	class='btn btn-light btn-sm rounded'
																	data-toggle='dropdown'
																	aria-haspopup='true'
																	aria-expanded='false'>
																	<i class='mdi mdi-dots-vertical'></i>
																</button>
																<div class='dropdown-menu dropdown-menu-right'>
																	<button class='dropdown-item' type='button'>
																		<i class='mdi mdi-trash'></i> Delete
																	</button>
																	<button class='dropdown-item' type='button'>
																		<i class='mdi mdi-x-circle'></i> Turn Off
																	</button>
																</div>
															</div>
														</span>
													</div>
													<div class='osahan-chat-box p-3 border-top border-bottom bg-light'>
														{ChatH?.map((props) => (
															<>
																{props?.userChat === readData?._id ? (
																	<>
																		<div class='text-center my-3'>
																			<span class='px-3 py-2 small bg-white shadow-sm  rounded'>
																				{moment(props?.createdAt).calendar()}
																			</span>
																		</div>
																		{props?.sendTo !== current?._id ? (
																			<div class='d-flex align-items-center osahan-post-header'>
																				<div class='dropdown-list-image mr-3 mb-auto'>
																					<img
																						style={{
																							objectFit: "cover",
																							borderRadius: "50%",
																						}}
																						clas
																						s='rounded-circle'
																						src='https://i.stack.imgur.com/l60Hf.png'
																						alt=''
																					/>
																				</div>
																				<div class='mr-1'>
																					<div
																						style={{ marginLeft: "10px" }}
																						class='text-truncate h6 mb-3'>
																						{data?.isDeveloper ? (
																							<>{readData?.userName}</>
																						) : (
																							<>{current?.name}</>
																						)}
																					</div>

																					<p style={{ margineft: "10px" }}>
																						{props?.message}
																					</p>
																				</div>
																				<span class='ml-auto mb-auto'>
																					<div class='text-right text-muted pt-1 small'>
																						{moment(props?.createdAt).fromNow()}
																					</div>
																				</span>
																			</div>
																		) : (
																			<div class='d-flex align-items-center osahan-post-header'>
																				<div class='dropdown-list-image mr-3 mb-auto'>
																					<img
																						style={{
																							objectFit: "cover",
																							borderRadius: "50%",
																						}}
																						clas
																						s='rounded-circle'
																						src='https://i.stack.imgur.com/l60Hf.png'
																						alt=''
																					/>
																				</div>
																				<div class='mr-1'>
																					<div
																						style={{ marginLeft: "10px" }}
																						class='text-truncate h6 mb-3'>
																						{data?.isDeveloper ? (
																							<>{readData2?.name}</>
																						) : (
																							<>{readData?.userName}</>
																						)}
																					</div>

																					<p style={{ marginLeft: "10px" }}>
																						{props?.message}
																					</p>
																				</div>
																				<span class='ml-auto mb-auto'>
																					<div class='text-right text-muted pt-1 small'>
																						{moment(props?.createdAt).fromNow()}
																					</div>
																				</span>
																			</div>
																		)}
																	</>
																) : null}
															</>
														))}
													</div>
													<div class='w-100 border-top border-bottom'>
														<textarea
															required
															onChange={(e) => {
																setMessage(e.target.value);
															}}
															placeholder='Write a message…'
															class='form-control border-0 p-3 shadow-none'
															rows='2'></textarea>
													</div>
													<div
														style={{ justifyContent: "space-between" }}
														class='p-3 d-flex align-items-center'>
														<div class='overflow-hidden'>
															<button
																type='button'
																class='btn btn-light btn-sm rounded'>
																<i class='mdi mdi-image'></i>
															</button>
															<button
																type='button'
																class='btn btn-light btn-sm rounded'>
																<i class='mdi mdi-paperclip'></i>
															</button>
															<button
																type='button'
																class='btn btn-light btn-sm rounded'>
																<i class='mdi mdi-camera'></i>
															</button>
														</div>
														<span class='ml-auto'>
															<button
																style={{
																	background: "#22218C",
																}}
																onClick={() => {
																	ChatMessage();
																	setMessage("");
																	myFubc();
																}}
																type='button'
																class='btn btn-success btn-sm rounded'>
																<i class='mdi mdi-send'></i> Send
															</button>
														</span>
													</div>
												</div>
											) : null}
										</div>
									</div>
								</main>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Messages;

// {data?.isDeveloper ? (
// 	<>
// 		{allFriend?.map((props) => (
// 			<>
// 				{props?.addedID === current?._id ? (
// 					<>
// 						<OtherUser
// 							dID={props?.userFriend}
// 							allUsers={allUsers}
// 							myProp={props}
// 							toggleShow={toggleShow}
// 						/>
// 					</>
// 				) : null}
// 			</>
// 		))}
// 	</>
// ) : null}
