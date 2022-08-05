import React, { useContext } from "react";
import UserHeader from "./UserHearder";
import UserSideBar from "./UserSideBar";
import styled from "styled-components";
import { BiDownload } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { GlobalContext } from "../../Global/GlobalContext";
import Loading from "../../LoadState";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const UploadProjects = () => {
	// const [price, setPrice] = React.useState().toLocaleString();
	const [loading, setLoading] = React.useState(false);
	const { current } = useContext(GlobalContext);
	const navigate = useNavigate();

	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [location, setLocation] = React.useState("");
	const [budget, setBudget] = React.useState("");
	const [skill, setSkill] = React.useState("");
	const [material, setMaterial] = React.useState("");

	const toogleLoading = () => {
		setLoading(true);
	};

	const onSubmit = async () => {
		if (
			title === "" ||
			description === "" ||
			budget === "" ||
			location === "" ||
			skill === "" ||
			material === ""
		) {
			Swal.fire({
				icon: "error",
				title: "all fields are required",
			});
		} else {
			toogleLoading();
			await axios
				.post(`http://localhost:5000/api/job/create/${current._id}`, {
					title,
					description,
					budget,
					loading,
					material,
					skill,
				})
				.then((res) => {
					Swal.fire({
						icon: "success",
						title: "Projects created successfully, Click okay to view Project",
					}).then(() => {
						navigate("/all-projects");
					});
					setLoading(false);
					setTitle("");
					setBudget("");
					setDescription("");
					setMaterial("");
					setSkill("");
					setLocation("");
				})
				.catch((err) => {
					Swal.fire({
						icon: "error",
						title: "an error occurred while creating",
					});
					setLoading(false);
				});
		}
	};

	const postProjects = (val) => {
		toogleLoading();
		console.log(val);
	};

	return (
		<>
			{loading ? <Loading /> : null}
			<div class=''>
				<UserHeader />
				<UserSideBar />
				<section class='user-dashboard'>
					<div class='dashboard-outer'>
						<Container>
							<Wrapper>
								<div
									style={{
										// textAlign: "center",
										width: "100%",
										color: "white",
										marginTop: "100px",
									}}>
									<h1 style={{ fontWeight: "bold" }}>
										Tell Us What You Need Done
									</h1>
									<h4
										style={{
											fontWeight: "400",
										}}>
										Contact skilled artisans within minutes. View profile,
										ratings, portfolio and chat with them. Pay the artisans only
										when you are 100% satisfied with their work.
									</h4>
								</div>
								<Card>
									<InputHold>
										<h2>Choose a name for your project</h2>
										<Hold>
											<Input2
												required
												onChange={(e) => {
													setTitle(e.target.value);
												}}
												placeholder='e.g. i need a painter'
											/>

											<select
												required
												onChange={(e) => {
													setSkill(e.target.value);
												}}>
												<option hidden>select profession</option>
												<option value='Welder'>Welder</option>
												<option value='Painter'>Painter</option>
												<option value='Plumber'>Plumber</option>
												<option value='Carpenter'>Carpenter</option>
												<option value='Electrician'>Electrician</option>
												<option value='Fashion Designer'>
													Fashion Designer
												</option>
												<option value='Brick Layer'>Brick Layer</option>
												<option value='Truck Pusher'>Truck Pusher</option>
												<option value='Hair Cut'>Hair Cut</option>
												<option value='Ac & Refrigerator'>
													Ac & Refrigerator
												</option>
												<option value='Genrator & Car'>Genrator & Car</option>
											</select>
											<select
												required
												onChange={(e) => {
													setMaterial(e.target.value);
												}}>
												<option hidden>Select who is providing material</option>
												<option value='Are You Providing Materials?'>
													Are You Providing Materials?
												</option>
												<option value='Artesian will Provide Materials'>
													Artesian will Provide Materials
												</option>
											</select>
											<Input2
												required
												onChange={(e) => {
													setBudget(e.target.value);
												}}
												type='number'
												placeholder='Project Price #(Naira)'
											/>
											<select
												required
												onChange={(e) => {
													setLocation(e.target.value);
												}}>
												<option hidden>
													select a location where your project is
												</option>
												<option value='Painter'>Agege</option>
												<option value='Ajah'>Ajah, Lagos</option>
												<option value='Badagry'>Badagry</option>
												<option value='Epe'>Epe, Lagos State</option>
												<option value='Ikeja'>Ikeja</option>
												<option value='Lagos Island'>Lagos Island</option>
												<option value='Lagos Mainland'>Lagos Mainland </option>
												<option value='Lekki'>Lekki </option>
												<option value='Satellite Town'>
													Satellite Town, Lagos{" "}
												</option>
											</select>
										</Hold>
									</InputHold>

									<InputHold>
										<h2>Tell us about your project</h2>
										<Input
											required
											onChange={(e) => {
												setDescription(e.target.value);
											}}
											placeholder='Describe your project here'
										/>
									</InputHold>

									<Div
										onClick={() => {
											Swal.fire({
												icon: "error",
												title: "Feature Not available ",
											});
										}}>
										<Input3 type='file' accept='image/*' />
										<ImageLabel htmlFor='pix'>
											{" "}
											<BiDownload
												style={{
													height: "25px",
													width: "25px",
												}}
											/>
											Upload Image
										</ImageLabel>
										<h5
											style={{
												fontWeight: "500",
											}}>
											Upload document for project if there is
										</h5>
									</Div>
									<Button
										onClick={() => {
											onSubmit();
											console.log("clicked");
										}}>
										Submit Project
									</Button>
								</Card>
							</Wrapper>
						</Container>
					</div>
				</section>
			</div>
		</>
	);
};

export default UploadProjects;

const Container = styled.div`
	width: 100%;
	height: 500px;
	/* background-color: red; */
	display: flex;

	/* flex-direction: column; */
	justify-content: center;
	align-items: center;
	position: absolute;
	background-color: #22218c;
	z-index: -1;

	@media Screen and (max-width: 768px) {
		/* height: 600px; */
	}
`;
const Wrapper = styled.div`
	width: 50%;
	height: 100%;
	// background: red;
	/* background-color: white; */
	display: flex;
	flex-direction: column;
	position: relative;
	margin: 50px;

	@media Screen and (max-width: 768px) {
		width: 100%;
	}
`;

const Card = styled.div`
	width: 100%;
	// height: 7000px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;

	border-radius: 5px;
	box-shadow: rgba(5, 0, 0, 0.25) 0px 1px 4px;

	@media Screen and (max-width: 768px) {
		width: 100%;
	}
	@media Screen and (max-width: 425px) {
		width: 320px;
		/* box-shadow: none; */
		/* background: transparent; */
		/* display: none; */
	}
`;
const Input = styled.textarea`
	padding: 5px 15px;
	width: 95.5%;
	height: 200px;
	border: grey solid 1px;
	outline: none;
	resize: none;

	@media Screen and (max-width: 768px) {
		width: 91%;
	}
	@media Screen and (max-width: 320px) {
		width: 100%;
	}
	@media Screen and (max-width: 375px) {
		width: 100%;
	}
	@media Screen and (max-width: 425px) {
		width: 100%;
	}
`;
const Input2 = styled.input`
	padding: 4px 15px;
	width: 100%;
	height: 35px;
	border: grey solid 1px;
	outline: none;
	resize: none;
	margin-top: 10px;
	margin-bottom: 10px;

	@media Screen and (max-width: 768px) {
		width: 92%;
	}
	@media Screen and (max-width: 320px) {
		width: 80%;
	}
	@media Screen and (max-width: 425px) {
		width: 90%;
	}
`;
const Input3 = styled.input`
	width: 95.5%;
	height: 35px;
	/* border: skyblue solid 1px; */
	outline: none;
	margin: 5px;
	display: none;
	padding: 2px 10px;

	@media Screen and (max-width: 768px) {
		width: 90%;
		/* flex-direction: column; */
	}
`;
const ImageLabel = styled.label`
	padding: 10px 40px;
	/* background-color: #22218C; */
	/* color: white; */
	border-radius: 3px;
	transition: all 350ms;
	font-size: medium;
	font-weight: 500;
	outline: none;
	border: 1px solid grey;
	margin: 10px;
	display: flex;
	align-items: center;

	:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
`;
const Hold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex-direction: column;

	@media Screen and (max-width: 768px) {
	}

	select {
		padding: 5px 15px;
		width: 100%;
		height: 40px;
		border: grey solid 1px;
		outline: none;

		@media Screen and (max-width: 768px) {
			width: 100%;
			border-top: none;
			border-left: 1px solid grey;
		}
		@media Screen and (max-width: 375px) {
			width: 91%;
		}
	}
`;
const Div = styled.div`
	width: 90%;
	border: 2px dotted grey;
	padding: 20px 0px;
	display: flex;
	margin-bottom: 10px;
	/* justify-content: space-between; */

	@media Screen and (max-width: 768px) {
		flex-direction: column;
		text-align: center;
		/* background-color: aqua; */
	}
`;
const Button = styled.button`
	padding: 10px 40px;
	background-color: #22218c;
	color: white;
	border-radius: 3px;
	transition: all 350ms;
	font-size: medium;
	outline: none;
	border: 0;
	margin: 10px;
	text-decoration: none;

	:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
`;
const InputHold = styled.div`
	margin: 10px;
	width: 90%;
	/* background-color: red; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */

	h2 {
		font-weight: 640;
	}

	@media Screen and (max-width: 768px) {
		align-items: center;
	}
`;
