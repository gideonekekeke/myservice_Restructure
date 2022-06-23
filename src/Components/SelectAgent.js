import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { Link } from "react-router-dom";
const SelectAgent = () => {
	const [rateChage, setRateChage] = React.useState(4);
	const [data, setData] = React.useState([]);

	const getAgents = async () => {
		await axios.get("http://localhost:5000/api/agent").then((response) => {
			console.log(response);
			setData(response?.data?.data);
		});
	};

	React.useEffect(() => {
		getAgents();
	}, []);

	const ratingChanged = () => {
		setRateChage(rateChage);
	};
	return (
		<Container>
			<h3 style={{ fontWeight: "bold" }}>Select Your Agent Near Your</h3>
			<p>
				please choose an agent you will work under...your can report any
				challenges to your agent
			</p>
			<br />
			<Box>
				{data?.map((props) => (
					<Holder>
						<ImageHold src={props?.agentAvatar} />
						<AgentName>{props?.name}</AgentName>
						<div>
							<ReactStars
								value={rateChage}
								count={5}
								size={24}
								activeColor='#ffd700'
							/>
						</div>
						<p style={{ textAlign: "center" }}>
							Specialises in commercial and literary fiction, non fiction,
							biography and auto biography (particularly related to politics,
							show business and the music business) and scripts for film and
							television
						</p>
						<Link to={`/${props?._id}/register-artecian`}>
							<a class='theme-btn btn-style-two'>
								<span style={{ color: "white" }} class='btn-title'>
									Select Agent
								</span>
							</a>
						</Link>
					</Holder>
				))}
			</Box>
		</Container>
	);
};

export default SelectAgent;

const AgentName = styled.div`
	font-weight: bold;
	font-size: 20px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	background: #f3f7fb;
`;

const Box = styled.div`
	width: 70%;
	height: 500px;
	background: white;
	border-radius: 10px;
	box-shadow: 10px 6px 3px -5px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

const ImageHold = styled.img`
	height: 200px;
	width: 100%;
	background: silver;
	border-radius: 5px;
	object-fit: cover;
`;

const Holder = styled.div`
	width: 300px;

	display: flex;

	align-items: center;
	flex-direction: column;
	margin: 10px;
`;
