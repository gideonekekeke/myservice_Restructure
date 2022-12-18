import React, { useContext } from "react";
import styled from "styled-components";
import ArtecianHeader from "./ArtecianHeader";
import ArtecianSideBar from "./ArtecianSideBar";
import { BiAddToQueue, BiCheck, BiSticker } from "react-icons/bi";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../Global/GlobalContext";
import Swal from "sweetalert2";
import Loading from "../../LoadState";
const ArtesiansBiddingDetails = () => {
	const { id } = useParams();
	const { current } = useContext(GlobalContext);
	const navigate = useNavigate();

	const [userData, setUserData] = React.useState([]);

	const [load, setLoad] = React.useState(true);
	const [data, setData] = React.useState([]);
	const [bidData, setBidData] = React.useState([]);
	const [price, setPrice] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const gettingUser = async () => {
		await axios
			.get(`https://myservicebe.onrender.com/api/job/${id}`)
			.then((response) => {
				// setLoad(false);
				// console.log("main userdatahdfhdfgchf", response.data.data);
				setUserData(response.data.data);
				setLoad(false);
			});
	};

	const toggleLoad = () => {
		setLoading(true);
	};

	const gettingUserArtesian = async () => {
		await axios
			.get(`https://myservicebe.onrender.com/api/artician/${current._id}`)
			.then((response) => {
				setLoad(false);
				// console.log("main userdatahdfhdf", response.data.data);
				setData(response.data.data);
			});
	};

	const placeBid = async () => {
		if (data.bid <= 0) {
			Swal.fire({
				icon: "error",
				title: "cannot place a bid anymore, subscribe to get more bid",
			});
		} else {
			toggleLoad();
			await axios
				.post(`https://myservicebe.onrender.com/api/bid/create/${id}`, {
					userBid: current?._id,
					description,
					price,
				})
				.then(() => {
					Swal.fire({
						icon: "success",
						title: "Bid placed successfully",
					}).then(() => {
						navigate("/browse-jobs");
					});
					setLoading(false);
				});

			axios
				.patch(
					`https://myservicebe.onrender.com/api/artician/reducingbid/${current._id}`,
				)
				.then(() => {
					console.log("correct");
				});
		}
	};

	const getAllBid = async () => {
		await axios
			.get(`https://myservicebe.onrender.com/api/bid`)
			.then((response) => {
				setLoad(false);
				// console.log("main bid", response.data.data);
				setBidData(response.data.data);
			});
	};

	React.useEffect(() => {
		gettingUser();
		gettingUserArtesian();
		getAllBid();
	}, [current]);
	return (
		<>
			{loading ? <Loading /> : null}
			<div>
				<ArtecianHeader />
				<ArtecianSideBar />
				<section class='user-dashboard'>
					<div class='dashboard-outer'>
						<Container>
							<H1>Side nav</H1>
							<Wrapper>
								<H2>Header</H2>
								<Jobs>
									<Card to='/bid_detail'>
										<TitleHold>
											<Title>{userData.title}</Title>
											<Category>{userData.skill}</Category>
										</TitleHold>
										<Description>{userData.description}</Description>
										<Tools>
											{" "}
											<b>Skills: </b> {userData.skill}
										</Tools>
										<Id>
											Project id: <b>#{userData._id?.slice(2, 9)}</b>
										</Id>
										<Bid>#{userData?.budget?.toLocaleString()} (Avg Bid)</Bid>
										<Line></Line>
										<TitleHold>
											<Title>
												Offer to work on this project? Place a Bid Now
											</Title>
										</TitleHold>
										<BidHold
											onSubmit={(e) => {
												e.preventDefault();
												placeBid();
											}}>
											<InputHold>
												<h4>Your bid for this job</h4>
												<Input
													required
													onChange={(e) => {
														setPrice(e.target.value);
													}}
													type='number'
													placeholder='Enter Your Bid in #(Naira)'
												/>
											</InputHold>
											<InputHold>
												<h4>Write a Short Note</h4>
												<Input2
													required
													onChange={(e) => {
														setDescription(e.target.value);
													}}
													type='text'
													placeholder='Your words should not be less than 100'
												/>
											</InputHold>
											{bidData?.find(
												(el) =>
													el?.userBid === current?._id && el.biddingUser === id,
											) ? (
												<Button
													disabled
													style={{
														backgroundColor: "silver",
														cursor: "not-allowed",
													}}>
													Already Bid on this job
												</Button>
											) : (
												<Button>Bid on this job</Button>
											)}
										</BidHold>
										<Requirement>
											<H_Hold>
												<H>
													{" "}
													<BiCheck
														style={{
															color: "green",
														}}
													/>
													Set your budget and timeframe
												</H>
												<H>
													{" "}
													<BiCheck
														style={{
															color: "green",
														}}
													/>
													Outline your propsal
												</H>
											</H_Hold>
											<H_Hold>
												<H>
													{" "}
													<BiCheck
														style={{
															color: "green",
														}}
													/>
													Get Paid for your work
												</H>
												<H>
													{" "}
													<BiCheck
														style={{
															color: "green",
														}}
													/>
													It's free to sign up and bid on jobs
												</H>
											</H_Hold>
										</Requirement>
									</Card>
								</Jobs>
							</Wrapper>
						</Container>
					</div>
				</section>
			</div>
		</>
	);
};

export default ArtesiansBiddingDetails;

const Bud = styled.div``;
const Diver = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 13px;
	font-weight: bold;
`;

const ArteCard = styled.div`
	width: 320px;
	margin-bottom: 10px;
	padding: 20px;
	text-decoration: none;
	background-color: white;
	color: black;
	border-radius: 5px;
	box-shadow: rgba(5, 0, 0, 0.25) 0px 1px 4px;
	/* background-color: orange; */

	:hover {
		background-color: #f7f7f7;
		transition: all 350ms;
	}

	@media Screen and (max-width: 768px) {
		width: 95%;
		overflow: hidden;
	}
`;
const Hol = styled.div`
	display: flex;
`;
const ArtImage = styled.div`
	height: 40px;
	width: 40px;
	background: silver;
	border-radius: 50%;
`;
const NameHold = styled.div`
	margin-left: 10px;
`;
const Prof = styled.div`
	color: silver;
	font-size: 12px;
	margin-top: -10px;
`;
const Name = styled.div`
	font-weight: bold;
`;
const Quot = styled.div``;

const H1 = styled.div`
	// background-color: #22218c;
	color: white;
	font-size: 30px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20%;
	/* height: 100vh; */

	@media Screen and (max-width: 768px) {
		display: none;
	}
`;

const H2 = styled.div`
	// background-color: #22218c;
	color: white;
	font-size: 30px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 70px;

	@media Screen and (max-width: 768px) {
		width: 100%;
	}
`;
const Container = styled.div`
	width: 100%;
	height: auto;
	/* background-color: #f7f7f7; */
	display: flex;
	justify-content: center;
	/* align-items: center; */
`;
const Wrapper = styled.div`
	width: 80%;
	height: auto;
	/* background-color: pink; */
	flex-direction: column;
	align-items: center;

	@media Screen and (max-width: 768px) {
		width: 100%;
	}
`;

const Jobs = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 60px;

	@media Screen and (max-width: 768px) {
		width: 100%;
		justify-content: center;
		margin: 10px;
	}
`;

const Line = styled.div`
	width: 98%;
	height: 1px;
	background-color: grey;
	margin: 10px;
`;

const Card = styled.div`
	width: 100%;
	margin-bottom: 10px;
	padding: 40px 5px;
	text-decoration: none;
	color: black;
	box-shadow: rgba(5, 0, 0, 0.25) 0px 1px 4px;
	background-color: #f7f7f7;
	/* background-color: orange; */

	:hover {
		transition: all 350ms;
	}

	@media Screen and (max-width: 768px) {
		width: 95%;
		overflow: hidden;
	}
`;
const Category = styled.div`
	font-size: 15px;
	font-weight: 700;
`;
const Description = styled.div`
	line-height: 25px;
	margin: 10px;

	@media Screen and (max-width: 768px) {
		// text-align: center;
	}
`;
const TitleHold = styled.div`
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
	margin: 10px;
	flex-wrap: wrap;
	width: 80%;

	@media Screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		/* flex-wrap: wrap; */
	}
`;
const Title = styled.div`
	font-size: 30px;
	font-weight: 700;
	margin-bottom: 5px;

	@media Screen and (max-width: 768px) {
		font-size: large;
	}
`;
const Tools = styled.div`
	margin: 10px;
	color: #b8b8ef;
`;
const Bid = styled.div`
	margin: 10px;
	color: green;
	font-weight: bold;
`;

const Id = styled.div`
	margin-top: 30px;
	margin-left: 10px;
`;
const BidHold = styled.form`
	width: 80%;
	display: flex;
	justify-content: space-between;

	align-items: center;
	margin-top: 20px;
	/* background-color: red; */
	margin: 10px;
	height: auto;

	@media Screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`;
const InputHold = styled.div``;
const Input2 = styled.textarea`
	padding: 4px 10px;
	width: 300px;
	height: 100px;
	outline: none;
	resize: none;
	font-size: 15px;
	border-radius: 5px;
	border: 1px solid grey;

	::placeholder {
		font-size: large;
	}

	@media Screen and (max-width: 768px) {
		width: 320px;
	}
`;
const Input = styled.input`
	padding: 4px 10px;
	width: 300px;
	height: 50px;
	outline: none;
	resize: none;
	font-size: 15px;
	border-radius: 5px;
	border: 1px solid grey;

	::placeholder {
		font-size: large;
	}

	@media Screen and (max-width: 768px) {
		width: 320px;
		margin-bottom: 20px;
	}
`;
const Button = styled.button`
	/* padding: 10px 10px; */
	/* background-color: #22218C; */
	background-color: red;
	color: white;
	width: 200px;
	height: 40px;
	border-radius: 3px;
	transition: all 350ms;
	font-size: large;
	font-weight: 700;
	outline: none;
	border: 0;
	margin-top: 20px;
	text-align: center;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;

	@media Screen and (max-width: 768px) {
		/* width: 75%; */
	}
	:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
`;
const Butn = styled.div`
	padding: 6px 20px;
	/* background-color: #22218C; */
	background-color: #b8b8ef;
	border-radius: 20px;
	color: #ffff;
	/* color: #216d36; */
	font-weight: bold;
	margin: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Requirement = styled.div`
	width: 50%;
	height: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 30px;

	@media Screen and (max-width: 768px) {
		flex-wrap: wrap;
		width: 100%;
	}
`;
const H_Hold = styled.div``;
const H = styled.div``;
