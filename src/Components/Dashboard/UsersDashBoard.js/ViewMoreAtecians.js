import React, { useContext } from "react";
import UserHeader from "./UserHearder";
import UserSideBar from "./UserSideBar";
import styled from "styled-components";
import { GlobalContext } from "../../Global/GlobalContext";
import { ImLocation } from "react-icons/im";
import { AiOutlineDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getServiceId, shootFriend } from "../../Global/actions";
import Loading from "../../LoadState";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const ViewMoreAtecians = () => {
	const hist = useNavigate();
	const userData = useSelector((state) => state.persistedReducer.serviceId);
	const shower = useSelector((state) => state.persistedReducer.showing);
	const articianName = useSelector(
		(state) => state.persistedReducer.serchValue,
	);

	console.log(userData);
	const { showAllResult, current } = useContext(GlobalContext);
	const dispatch = useDispatch();
	const [allFriend, setAllFriend] = React.useState([]);

	const [show, setShow] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const toggleShow = (id) => {
		setShow(!show);
	};

	const toggleLoad = () => {
		setLoading(true);
	};

	const getAllFriends = async () => {
		await axios
			.get(`https://myserviceprojectapi.herokuapp.com/api/user/friends/all`)

			.then((response) => {
				console.log("this are the friendsztgc oooo", response?.data);
				setAllFriend(response?.data);
			});
	};

	React.useEffect(() => {
		getAllFriends();
	}, [userData, current, articianName]);

	return (
		<div class='page-wrapper dashboard'>
			<UserHeader />
			<UserSideBar />
			<br />
			<section class='user-dashboard'>
				<div class='dashboard-outer'>
					<h3 style={{ marginLeft: "10px" }}> All {articianName}s</h3>
					<br />
					{showAllResult?.map((props, i) => (
						<Container>
							<Holdeer>
								<UserImage src={props.avatar} />

								<Hold>
									<h5 style={{ fontWeight: "bold" }}>{props.name}</h5>
									<h6
										style={{
											color: "silver",
										}}>
										{props.profession}
									</h6>

									<h6 style={{ display: "flex" }}>
										<ImLocation />
										<div style={{ fontWeight: "bold" }}>{props.location}</div>
									</h6>

									<div
										style={{
											display: "flex",
											flexWrap: "wrap",
											marginTop: "10px",
											justifyContent: "space-between",
										}}>
										<p>
											What is Lorem Ipsum? Lorem Ipsum is simply dummy text of
											the printing and typesetting industry. Lorem Ipsum has
											been the industry's standard dummy text ever since the
											1500s
										</p>

										<div className='default-form'>
											{allFriend.find(
												(el) =>
													el?.userFriend === current?._id &&
													el?.addedID === props._id,
											) ? (
												<But1
													onClick={() => {
														hist("/allmessage");
													}}>
													Chat
												</But1>
											) : (
												<But1
													onClick={() => {
														axios
															.post(
																`https://myserviceprojectapi.herokuapp.com/api/user/${current._id}/friend`,
																{
																	userName: props?.name,
																	userImage: props?.avatar,
																	addedID: props?._id,
																},
															)
															.then((response) => {
																setLoading(false);
																// console.log("i just added this friend now", response);
																dispatch(shootFriend(response?.data?.data));

																hist("/allmessage");
															})
															.catch((error) => {
																if (error.response.status === 400) {
																	swal({
																		title:
																			"cannot procceed , please Register or login your account",
																		text: "",
																		icon: "error",
																		button: "ok",
																	}).then((value) => {
																		hist("/user-register");
																	});
																}
															});
													}}>
													Chat
												</But1>
											)}
										</div>
										<a href={`tel:${props.phoneNumber}`}>
											<But>Call</But>
										</a>
									</div>

									<ButHold
										onClick={() => {
											dispatch(getServiceId(props._id));
											toggleShow(props._id);
											console.log("this is the id", props._id);

											// axios.patch(
											// 	`https://myserviceprojectapi.herokuapp.com/artician/editshow/${props._id}`,
											// );
										}}>
										<div
											style={{
												color: "black",
												cursor: "pointer",
												borderBottom: "1px solid silver",
											}}>
											Services Offered for {props.name}
											<AiOutlineDown />
										</div>
									</ButHold>

									{props._id === userData && shower && show ? (
										<>
											{props.produ.map(({ title, material, price, id }) => (
												<ServiceHold>
													<h5 style={{ fontWeight: "bold" }}>{title}</h5>
													<MaterialHold>{material}</MaterialHold>
													<h6>#{price}</h6>
													<But2
														onClick={() => {
															toggleLoad();
															axios
																.post(
																	`https://myserviceprojectapi.herokuapp.com/api/book/${current?._id}/booking`,
																	{
																		bookTitle: title,
																		Desc: material,
																		price: price,
																		userId: `${current._id}`,
																		sendingTo: `${userData}`,
																	},
																)
																.then((response) => {
																	Swal.fire({
																		position: "center",
																		icon: "success",
																		title: "Booked Successfull",
																		timer: 2500,
																	}).then(() => {
																		window.location.reload(
																			hist("/user-dashboard"),
																		);
																	});

																	setLoading(false);
																})
																.catch(() => {
																	Swal.fire({
																		position: "center",
																		icon: "error",
																		title: "An error occured",
																		showConfirmButton: false,
																		timer: 2500,
																	});
																	setLoading(false);
																});
														}}
														style={{ marginTop: "20px" }}>
														Book Service
													</But2>
												</ServiceHold>
											))}
										</>
									) : null}
								</Hold>
							</Holdeer>
						</Container>
					))}
				</div>

				{loading ? <Loading /> : null}
			</section>
		</div>
	);
};

export default ViewMoreAtecians;

const UserImage = styled.img`
	height: 90px;
	width: 90px;
	border-radius: 50px;
	background-color: silver;
	object-fit: cover;
`;

const ServiceHold = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: "1px solid silver";
	transition: all 350ms;

	@media screen and (max-width: 600px) {
		margin-left: -100px;
		// background-color: red;
		margin-top: 10px;
		font-size: 10px;
		overflow-x: scroll;
		flex-direction: column;
		align-items: flex-start;
	}
`;
const MaterialHold = styled.div``;

const But2 = styled.div`
	height: 40px;
	width: 120px;
	background-color: #22218c;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	border-radius: 10px;
	margin-top: 50px;
	cursor: pointer;
`;

const Holdeer = styled.div`
	display: flex;
`;
const But1 = styled.div`
	height: 40px;
	width: 120px;
	background-color: #22218c;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	border-radius: 10px;
	cursor: pointer;
	margin: 5px;
`;
const But = styled.div`
	height: 40px;
	width: 120px;
	background-color: red;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	border-radius: 10px;
	margin: 5px;
`;
const ButHold = styled.div`
	display: flex;
	justify-content: space-between;

	margin-top: 10px;
	align-items: center;
	width: 100%;

	@media screen and (max-width: 600px) {
		width: 290px;
		margin-left: -100px;
		// background-color: red;
		margin-top: 10px;
	}
`;

const Hold = styled.div`
	margin-left: 10px;
	display: flex;
	flex-direction: column;

	p {
		width: 500px;

		@media screen and (max-width: 600px) {
			width: 290px;
			margin-left: -100px;
			// background-color: red;
			margin-top: 10px;
		}

		@media screen and (max-width: 600px) {
		}
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;
	border: "1px solid silver";
	box-shadow: 5px 5px 2px -2px rgba(0, 0, 0, 0.1);
	padding: 20px;
	margin: 10px;
	border-radius: 10px;
	background-color: white;
`;
