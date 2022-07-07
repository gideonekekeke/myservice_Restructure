import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../Components/Global/GlobalContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import swal from "sweetalert";
import axios from "axios";
import Loading from "./LoadState";
import { DelayedRenderer } from "react-delayed-renderer";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch, shootFriend } from "./Global/actions";
import { ImCancelCircle, ImLocation } from "react-icons/im";
const WorkersModal = () => {
	const dispatch = useDispatch();
	const hist = useNavigate();
	const { showResult, current } = useContext(GlobalContext);

	console.log("now now", showResult?.produ[0]);

	const [loading, setLoading] = React.useState(false);
	const [bookTitle, setBookTitle] = React.useState("");
	const [data, setData] = React.useState([]);
	const [Desc, setDesc] = React.useState("");
	const [price, setPrice] = React.useState("");
	const [userId, setUserId] = React.useState("");
	const [sendingTo, setSendingTo] = React.useState("");
	const [allFriend, setAllFriend] = React.useState([]);
	const toggleLoad = () => {
		setLoading(true);
	};

	const PostService = async () => {
		toggleLoad();
		await axios
			.post(
				`https://myserviceprojectapi.herokuapp.com/api/book/${current._id}/booking`,
				{
					bookTitle: `${showResult.produ[0].title}`,
					Desc: `${showResult.produ[0].material}`,
					price: `${showResult.produ[0].price}`,
					userId: `${current._id}`,
					sendingTo: `${showResult._id}`,
				},
			)
			.then((response) => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Booked Successfull",
					timer: 2500,
				}).then(() => {
					window.location.reload(hist("/user-dashboard"));
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
	};

	const fetchDetails = async () => {
		await axios
			.get(
				`https://myserviceprojectapi.herokuapp.com/api/artician/${showResult._id}`,
			)

			.then((response) => {
				console.log("get userdrhdtr", response);

				setData(response?.data?.data);
			});
	};

	const captureDetails = {
		userName: data?.name,
		userImage: data?.avatar,
		addedID: data?._id,
	};

	const AddingFriend = async () => {
		const res = await axios
			.post(
				`https://myserviceprojectapi.herokuapp.com/api/user/${current._id}/friend`,
				captureDetails,
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
						title: "cannot procceed , please Register or login your account",
						text: "",
						icon: "error",
						button: "ok",
					}).then((value) => {
						hist("/user-register");
					});
				}
			});
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
		fetchDetails();
		getAllFriends();
	}, []);
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "rgba(0,0,0, 0.5)",
				height: "100vh",
				position: "fixed",
				width: "100%",
				zIndex: "1000",
			}}
			class='model'>
			<DelayedRenderer delay={2000} onRender={() => console.log("rendered")}>
				<Card id='login-modal'>
					<UpHold>
						<UserImage src={showResult.avatar} />
						<MainHold>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}>
								{" "}
								<h5>{showResult.name}</h5>
								<div>
									<ImCancelCircle
										onClick={() => {
											hist("/user-dashboard");
										}}
										style={{ fontSize: "20px", cursor: "pointer" }}
									/>
								</div>
							</div>

							<h6 style={{ display: "flex" }}>
								<ImLocation />
								<div style={{ fontWeight: "bold" }}>{showResult.address}</div>
							</h6>

							<div style={{ color: "silver" }}>{showResult.profession}</div>
							<p style={{ color: "black" }}>
								I use My technical skills and problem-solving abilities to
								resolve general household maintenance problems.
							</p>
						</MainHold>
					</UpHold>
					<ButHold>
						<div style={{ color: "silver" }}>Services Offered</div>

						{allFriend.find(
							(el) =>
								el?.userFriend === current?._id &&
								el?.addedID === showResult._id,
						) ? (
							<But1
								onClick={() => {
									hist("/allmessage");
								}}>
								Chat
							</But1>
						) : (
							<But1 onClick={AddingFriend}>Chat</But1>
						)}
						<a href={`tel:${showResult.phoneNumber}`}>
							<But>Call</But>
						</a>
					</ButHold>
					{showResult?.produ[0] ? (
						<div style={{ dispay: "flex" }}>
							<h4 style={{ color: "black", fontWeight: "bold" }}>
								{showResult?.produ[0].title}
							</h4>
							<div>{showResult?.produ[0].material}</div>
							<div>#{showResult?.produ[0].price}</div>
							<But2 onClick={PostService}>Book This Service</But2>
						</div>
					) : null}

					<br />
					<Link
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
						to='/view-more'>
						View More
					</Link>
				</Card>
			</DelayedRenderer>
			{loading ? <Loading /> : null}
		</div>
	);
};

export default WorkersModal;
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
`;
const But2 = styled.div`
	height: 40px;
	/* width: 120px; */
	background-color: #22218c;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	border-radius: 10px;
	cursor: pointer;
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
`;
const ButHold = styled.div`
	display: flex;
	justify-content: space-between;

	margin-top: 10px;
	align-items: center;
	width: 100%;
`;

const MainHold = styled.div`
	margin-left: 10px;

	p {
		width: 250px;
		@media screen and (max-width: 790px) {
			font-size: 14px;
			width: 100%;
		}
	}
`;
const UserImage = styled.img`
	height: 150px;
	width: 150px;
	background: silver;
	border-radius: 5px;
	object-fit: cover;

	@media screen and (max-width: 790px) {
		height: 70px;
		width: 70px;
	}
`;
const UpHold = styled.div`
	display: flex;
`;

const Card = styled.div`
	width: 500px;
	background: white;
	padding: 30px;
	border-radius: 10px;
	font-family: raleway;

	textarea {
		width: 100%;
		height: 200px;
		padding: 10px;
	}

	@media screen and (max-width: 790px) {
	}
`;
