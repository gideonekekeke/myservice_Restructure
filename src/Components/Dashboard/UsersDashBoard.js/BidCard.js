import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
	BiArrowFromLeft,
	BiArrowFromRight,
	BiLeftArrow,
	BiLeftArrowAlt,
	BiPause,
	BiRightArrowAlt,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../../Global/GlobalContext";
import { ClipLoader } from "react-spinners";
import pic from "./img/4.gif";
const BidCard = () => {
	const [userData, setUserData] = React.useState([]);
	const { current } = useContext(GlobalContext);
	const [load, setLoad] = React.useState(true);

	const gettingUser = async () => {
		await axios
			.get(`https://myservicebe.onrender.com/api/user/${current._id}`)
			.then((response) => {
				// setLoad(false);
				console.log("main userdatahdfhdfgchf", response.data.data);
				setUserData(response.data.data);
				setLoad(false);
			});
	};

	React.useEffect(() => {
		gettingUser();
	}, [current]);
	return (
		<Container>
			<Wrapper>
				<Head>
					<Div>
						{userData?.project <= 0 ? (
							<Jobs>No Projects Uploaded</Jobs>
						) : (
							<Jobs>{userData?.project?.length} Projects Uploads</Jobs>
						)}
					</Div>
					<Rec>
						<Box>
							<BiArrowFromRight />
						</Box>
						<Box>
							<BiLeftArrowAlt />
						</Box>
						<Box>1</Box>
						<Box>2</Box>
						<Box>3</Box>
						<Box>
							<BiRightArrowAlt />
						</Box>
						<Box>
							<BiArrowFromLeft />
						</Box>
					</Rec>
				</Head>
				<Line></Line>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						minHeight: "70vh",
					}}>
					{userData?.project <= 0 ? (
						<div
							style={{
								color: "black",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<img src={pic} />
						</div>
					) : null}
					{userData?.project?.map((props) => (
						<Card to={`/bid_detail/${props._id}`}>
							<TitleHold>
								<Title>{props.title}</Title>
								<Category>{props.skill}</Category>
							</TitleHold>
							<Description>{props.description}</Description>
							<Tools>{props.skill}</Tools>
							<Bid>#{props.budget.toLocaleString()} (Avg Bid)</Bid>
							<button> View More</button>
							<Line></Line>
						</Card>
					))}
				</div>
			</Wrapper>
		</Container>
	);
};

export default BidCard;

const Container = styled.div`
	width: 90%;
	height: auto;
	/* background-color: yellow; */
	display: flex;
	justify-content: center;
	/* margin: 10px; */
	align-items: center;
	box-shadow: rgba(5, 0, 0, 0.25) 0px 1px 4px;

	@media Screen and (max-width: 768px) {
		width: 100%;
		box-shadow: none;
	}
`;
const Wrapper = styled.div`
	width: 90%;
	height: auto;
	/* background-color: blanchedalmond; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media Screen and (max-width: 768px) {
		width: 100%;
	}
`;

const Head = styled.div`
	width: 100%;
	/* height: 100px; */
	/* background-color: aliceblue; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 10px;
	/* flex-wrap: wrap; */

	@media Screen and (max-width: 768px) {
		flex-direction: column;
		padding: 2px 2px;
		/* margin-right: 50px; */
		/* align-items: center; */
	}
`;
const Div = styled.div`
	width: 500px;
	/* background-color: green; */
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media Screen and (max-width: 768px) {
		justify-content: center;
	}
`;
const Select = styled.select`
	padding: 10px 20px;
	border: 1px solid grey;
	outline: none;

	@media Screen and (max-width: 768px) {
		display: none;
	}
`;
const Jobs = styled.div``;
const Rec = styled.div`
	width: 400px;
	/* background-color: pink; */
	display: flex;
	margin-left: 10px;
	justify-content: center;
	align-items: center;
`;
const Box = styled.div`
	width: 30px;
	height: 30px;
	/* background-color: salmon; */
	border: 1px solid grey;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;

	:hover {
		background-color: #22218c;
		color: white;
		cursor: pointer;
		transition: all 350ms;
	}
`;
const Line = styled.div`
	width: 98%;
	height: 1px;
	background-color: grey;
	margin: 10px;
`;

const Card = styled(Link)`
	width: 100%;
	margin-bottom: 10px;
	padding: 5px 5px 5px 2px;
	text-decoration: none;
	color: black;
	/* background-color: orange; */

	:hover {
		background-color: #f7f7f7;
		cursor: pointer;
		transition: all 350ms;
	}

	@media Screen and (max-width: 768px) {
		width: 90%;
	}

	/* background-color: #22218C; */
	button {
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
		margin: 10px;
		margin-top: 40px;
		text-align: center;
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
		/* display: none; */

		@media Screen and (max-width: 768px) {
			/* width: 75%; */
		}
		:hover {
			cursor: pointer;
			transform: scale(1.05);
		}
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
		/* text-align: center; */
	}
`;
const TitleHold = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
	flex-wrap: wrap;

	@media Screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		text-align: left;
		/* background-color: red; */
		justify-content: none;
		align-items: flex-start;

		/* flex-wrap: wrap; */
	}
`;
const Title = styled.div`
	font-size: 20px;
	font-weight: 700;
	margin-bottom: 5px;
`;
const Tools = styled.div`
	margin: 10px;
`;
const Bid = styled.div`
	margin: 10px;
	color: green;
	font-weight: bold;
`;
