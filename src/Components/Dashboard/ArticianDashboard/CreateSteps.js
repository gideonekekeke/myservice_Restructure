import React, { useContext, useState } from "react";
import { ImCancelCircle } from "react-icons/im";

import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BiRadioCircleMarked } from "react-icons/bi";
import Swal from "sweetalert2";
import Loading from "../../LoadState";
import { v4 as uuidv4 } from "uuid";

const CreateSteps = ({ toggleSteps }) => {
	const [steps, setSteps] = React.useState([
		{ _id: uuidv4(), done: false, confirm: false },
	]);
	const stepData = useSelector((state) => state.persistedReducer.stepID);
	const [loading, setLoading] = React.useState(false);
	const [singleData, setSingleData] = React.useState([]);

	const addStep = () => {
		setSteps([...steps, { _id: uuidv4(), done: false, confirm: false }]);
	};

	const removeSteps = (i, e) => {
		const values = [...steps];
		values.splice(i, 1);
		setSteps(values);
	};

	const onChangeSteps = (i, e) => {
		const values = [...steps];
		values[i][e.target.name] = e.target.value;
		setSteps(values);
		// console.log(steps);
		console.log(values);
	};

	const toogleLoading = () => {
		setLoading(true);
	};

	const uploadSteps = async () => {
		const values = [...steps];

		toogleLoading();
		await axios
			.post(
				`https://myserviceprojectapi.herokuapp.com/api/step/${stepData}/creatingstep`,
				{
					steps,
				},
			)
			.then((res) => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: res?.data?.message,
					showConfirmButton: false,
					timer: 2500,
				});
				setLoading(false);
				window.location.reload();
			});
	};

	const getBookings = async () => {
		await axios
			.get(
				`https://myserviceprojectapi.herokuapp.com/api/book/singlebook/${stepData}`,
			)
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
								Create Steps
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
							create and check all the steps you will take to finish up this
							task
						</div>
						<div style={{ color: "red", fontWeight: "bold" }}>
							Note : Atleast you must fill in three steps{" "}
						</div>
						{steps.map((props, i) => (
							<InputHold>
								<input
									required
									type='text'
									name='steps'
									onChange={(e) => {
										onChangeSteps(i, e);
									}}
									placeholder='type here...'
								/>

								<IconHolder>
									<span>
										{steps.length >= 5 ? null : (
											<>
												<AiFillPlusCircle
													onClick={addStep}
													style={{
														color: "green",
														fontSize: "20px",
														margin: "5px",
														cursor: "pointer",
													}}
												/>
											</>
										)}
									</span>
									<span>
										{steps.length > 1 ? (
											<AiFillMinusCircle
												onClick={removeSteps}
												style={{
													color: "red",
													fontSize: "20px",
													margin: "5px",
													cursor: "pointer",
												}}
											/>
										) : null}
									</span>
								</IconHolder>
							</InputHold>
						))}

						{steps.length >= 3 ? (
							<button
								onClick={uploadSteps}
								style={{
									background: "#22218C",
									color: "white",
									width: "120px",
									height: "30px",
									borderRadius: "5px",
									marginTop: "10px",
								}}
								data-text='View Aplication'>
								Submit Steps
							</button>
						) : (
							<button
								style={{
									background: "silver",
									color: "white",
									width: "120px",
									height: "30px",
									borderRadius: "5px",
									marginTop: "10px",
									cursor: "not-allowed",
								}}
								data-text='View Aplication'>
								Submit Steps
							</button>
						)}

						<br />
						<br />

						<h5 style={{ fontWeight: "bold" }}>All Steps</h5>
						{singleData?.prodStep?.map((props) => (
							<>
								{props?.steps?.map(({ steps, _id, done, i }) => (
									<StepHold>
										<span style={{ display: "flex", alignItems: "center" }}>
											<BiRadioCircleMarked style={{ fontSize: "20px" }} />
											<div>{steps}</div>
										</span>
										{props?.done ? (
											<button
												style={{
													background: "silver",
													color: "white",
													width: "100px",
													height: "30px",
													borderRadius: "5px",
													cursor: "not-allowed",
												}}
												data-text='View Aplication'>
												UnderReview
											</button>
										) : (
											<button
												onClick={() => {
													axios
														.patch(
															`https://myserviceprojectapi.herokuapp.com/api/step/${_id}/updatingDone
                                                `,
															{
																done: true,
															},
														)
														.then(() => {
															Swal.fire({
																icon: "success",
																title: "Completed",
															});
															done = true;
															// window.location.reload();
														});

													done = true;
												}}
												style={{
													background: "#22218C",
													color: "white",
													width: "100px",
													height: "30px",
													borderRadius: "5px",
												}}
												data-text='View Aplication'>
												Done
											</button>
										)}
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

export default CreateSteps;

// {
// 	singleData?.prodStep?.length >= 1 ? null : (
// 		<AiFillPlusCircle
// 			onClick={addStep}
// 			style={{
// 				color: "green",
// 				fontSize: "20px",
// 				margin: "5px",
// 				cursor: "pointer",
// 			}}
// 		/>
// 	);
// }

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
