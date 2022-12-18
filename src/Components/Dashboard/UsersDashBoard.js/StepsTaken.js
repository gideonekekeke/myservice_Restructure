import React, { useContext, useState } from "react";
import { ImCancelCircle } from "react-icons/im";

import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BiRadioCircleMarked } from "react-icons/bi";
import Swal from "sweetalert2";
import Loading from "../../LoadState";

const StepsTaken = ({ toggleSteps }) => {
	const stepData = useSelector((state) => state.persistedReducer.stepID);
	const [loading, setLoading] = React.useState(false);
	const [singleData, setSingleData] = React.useState([]);

	const getBookings = async () => {
		await axios
			.get(`https://myservicebe.onrender.com/api/book/singlebook/${stepData}`)
			.then((res) => {
				console.log(res.data);
				setSingleData(res.data);
			});
	};

	React.useEffect(() => {
		getBookings();
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
			<Card id='login-modal'>
				<UpHold>
					<MainHold>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "100%",
							}}>
							{" "}
							<h5
								style={{
									fontWeight: "bold",
								}}>
								All Steps
							</h5>
							<div
								style={{
									display: "flex",
									justifyContent: "flex-end",
									alignItems: "center",
								}}>
								<ImCancelCircle
									onClick={toggleSteps}
									style={{ fontSize: "20px", cursor: "pointer" }}
								/>
							</div>
						</div>
						<div>
							Here are all the steps it will take to complete the project
						</div>
						<div style={{ color: "red", fontWeight: "bold" }}>
							Note : you can only click confirm when a task is done.
						</div>

						<br />
						<br />

						{singleData?.prodStep?.map((props) => (
							<>
								{props?.steps?.map(({ steps }) => (
									<StepHold>
										<span style={{ display: "flex", alignItems: "center" }}>
											<BiRadioCircleMarked style={{ fontSize: "20px" }} />
											<div>{steps}</div>
										</span>
										<button
											style={{
												background: "silver",
												color: "white",
												width: "100px",
												height: "30px",
												borderRadius: "5px",
											}}
											data-text='View Aplication'>
											Confirm
										</button>
										{props.done ? (
											<button
												style={{
													background: "silver",
													color: "white",
													width: "100px",
													height: "30px",
													borderRadius: "5px",
												}}
												data-text='View Aplication'>
												Not Done
											</button>
										) : null}
									</StepHold>
								))}
							</>
						))}
						<br />
						<br />
						<br />
						<DownStepHold>
							<button
								style={{
									background: "gray",
									color: "white",
									width: "100px",
									height: "30px",
									borderRadius: "5px",
									cursor: "not-allowed",
								}}
								data-text='View Aplication'>
								Completed
							</button>

							<button
								onClick={toggleSteps}
								style={{
									background: "red",
									color: "white",
									width: "100px",
									height: "30px",
									borderRadius: "5px",
								}}
								data-text='View Aplication'>
								Cancel
							</button>
						</DownStepHold>
					</MainHold>
				</UpHold>
			</Card>
			{loading ? <Loading /> : null}
		</div>
	);
};

export default StepsTaken;

const DownStepHold = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StepHold = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
`;

const InputHold = styled.div`
	display: flex;

	align-self: center;

	input {
		border: 1px solid silver;
		width: 100%;
		border-radius: 5px;
		padding-left: 10px;
		transition: all 0.3s ease-in-out;

		:hover {
			border-color: #22218c;
		}
	}
`;
const IconHolder = styled.div`
	display: flex;
	align-items: center;
`;

const MainHold = styled.div`
	margin-left: 10px;
	width: 100%;

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
	width: 100%;
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
