import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../../Global/GlobalContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import swal from "sweetalert";
import axios from "axios";
import Loading from "../../LoadState";
import { DelayedRenderer } from "react-delayed-renderer";
import { useDispatch, useSelector } from "react-redux";
import { shootFriend } from "../../Global/actions";
import StarRatingComponent from "react-star-rating-component";
import { ImCancelCircle, ImLocation } from "react-icons/im";
import "./ratestyle.css";
const RateComps = ({ changeDetail }) => {
	const sendingTo = useSelector((state) => state.persistedReducer.sentTo);
	const readID = useSelector((state) => state.persistedReducer.bookID);
	const dispatch = useDispatch();
	const hist = useNavigate();
	const { current } = useContext(GlobalContext);

	const [loading, setLoading] = React.useState(false);
	const [bookTitle, setBookTitle] = React.useState("");
	const [data, setData] = React.useState([]);
	const [Desc, setDesc] = React.useState("");
	const [price, setPrice] = React.useState("");
	const [userId, setUserId] = React.useState("");

	const [allFriend, setAllFriend] = React.useState([]);
	const toggleLoad = () => {
		setLoading(true);
	};

	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	// const PostService = async () => {
	// 	toggleLoad();
	// 	await axios
	// 		.post(`http://localhost:5000/api/book/${current._id}/booking`, {
	// 			bookTitle: `${showResult.produ[0].title}`,
	// 			Desc: `${showResult.produ[0].material}`,
	// 			price: `${showResult.produ[0].price}`,
	// 			userId: `${current._id}`,
	// 			sendingTo: `${showResult._id}`,
	// 		})
	// 		.then((response) => {
	// 			Swal.fire({
	// 				position: "center",
	// 				icon: "success",
	// 				title: "Booked Successfull",

	// 				timer: 2500,
	// 			}).then(() => {
	// 				window.location.reload(hist("/user-dashboard"));
	// 			});

	// 			setLoading(false);
	// 		})
	// 		.catch(() => {
	// 			Swal.fire({
	// 				position: "center",
	// 				icon: "error",
	// 				title: "An error occured",
	// 				showConfirmButton: false,
	// 				timer: 2500,
	// 			});
	// 			setLoading(false);
	// 		});
	// };

	const fetchDetails = async () => {
		await axios
			.get(
				`https://myserviceprojectapi.herokuapp.com/api/artician/${sendingTo}`,
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
	}, [sendingTo, readID]);
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
			<Card id='login-modal'>
				<UpHold>
					<MainHold>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
							}}>
							<p style={{ textAlign: "center" }}>
								How was your Service with {data.name}?{" "}
							</p>
							<h5 style={{ fontWeight: "bold" }}>Rate {data.name}</h5>
							<br />
							<div className='star-rating'>
								{[...Array(5)].map((star, index) => {
									index += 1;
									return (
										<button
											style={{
												backgroundColor: "transparent",
												border: "none",
												outline: "none",
												cursor: "pointer",
												fontSize: "30px",
											}}
											type='button'
											key={index}
											className={index <= (hover || rating) ? "on" : "off"}
											onClick={() => {
												setRating(index);

												axios
													.post(
														`https://myserviceprojectapi.herokuapp/api/rateuser/${data._id}/postrate`,
														{
															count: index,
															userRated: current?._id,
														},
													)
													.then((response) => {
														Swal.fire({
															title: "Thanks for your feedback",
															icon: "success",
														}).then(() => {
															hist("/user-dashboard");

															window.location.reload();
														});
													});

												axios.patch(
													`https://myserviceprojectapi.herokuapp/api/book/rateUpdate/${readID}
                                                `,
													{
														ratee: true,
													},
												);
											}}
											onMouseEnter={() => setHover(index)}
											onMouseLeave={() => setHover(rating)}>
											<span className='star'>&#9733;</span>
										</button>
									);
								})}
							</div>
						</div>
					</MainHold>
				</UpHold>
			</Card>
		</div>
	);
};

export default RateComps;
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
	// justify-content: space-between;

	margin-top: 10px;
	align-items: center;
	width: 100%;
`;

const MainHold = styled.div`
	margin-left: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

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
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	textarea {
		width: 100%;
		height: 200px;
		padding: 10px;
	}

	@media screen and (max-width: 790px) {
	}
`;
