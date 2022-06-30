import React, { useContext } from "react";
import "./regart.css";
import Swal from "sweetalert2";
import axios from "axios";
// import Loading from "../LoadState";
import swal from "sweetalert";
import Autocomplete from "react-google-autocomplete";

import { useParams } from "react-router-dom";
import Loading from "./LoadState";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
// import 'sweetalert2/src/sweetalert2.scss'

const RegisterArtecian = () => {
		const yupSchema = yup.object().shape({
			name: yup.string().required("School name has to be filled"),
			email: yup.string().required("full name has to be entered"),
			password: yup.string().required("full name has to be entered"),
			address: yup.string().required("email has to be filled"),
		});

		const {
			handleSubmit,
			reset,
			register,
			formState: { errors },
		} = useForm({ resolver: yupResolver(yupSchema) });


	const [location, setLocation] = React.useState("");
	const [profession, setProfession] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const [toggle, setToggle] = React.useState(false);

	const changeToggle = () => {
		setToggle(!toggle);
	};

	const toggleLoad = () => {
		setLoading(true);
	};

		const onSubmit = handleSubmit(async (val) => {
           
			const {name, email, password, address} = val
			console.log(val);
			const localURL = "http://localhost:2331";
			const url = `http://localhost:5000/api/artician/register`;

			toggleLoad()
			await axios.post(url, {
				name, 
				email,
				password,
				address,
				profession,
				location
			}).then((response)=>{
	Swal.fire({
		position: "center",
		icon: "success",
		title: "Please check your email for account verification",
		showConfirmButton: false,
		timer: 2500,
	});

	console.log(response)
	setLoading(false)
	reset()
			})

		
		});


	// const postData = async () => {
	// 	if (
	// 		name === "" &&
	// 		email === "" &&
	// 		password === "" &&
	// 		profession === "" &&
	// 		location === ""
	// 	) {
	// 		Swal.fire({
	// 			icon: "error",
	// 			title: "Empty Fields",
	// 			text: "All fields are Compulsory!",
	// 			//   footer: '<a href="">Why do I have this issue?</a>'
	// 		});
	// 	} else {
	// 		toggleLoad();
	// 		await axios
	// 			.post(`http://localhost:5000/api/artician/${id}/register `, {
	// 				name,
	// 				email,
	// 				password,
	// 				location,
	// 				address,
	// 				profession,
	// 			})
	// 			.then((response) => {
	// 				Swal.fire({
	// 					icon: "success",
	// 					title: "Success",
	// 					text: "A message has been sent to your email address to confirm your account",
	// 					//   footer: '<a href="">Why do I have this issue?</a>'
	// 				});

	// 				console.log(response)
	// 				// window.localStorage.setItem(
	// 				// 	"dataUsers",
	// 				// 	JSON.stringify(response?.data?.data?.CreateUser),

	// 				// );

	// 				//  console.log(response.data.data.CreateUser)

	// 				setLoading(false);
	// 			})
	// 			.catch((error) => {
	// 				Swal.fire({
	// 					icon: "error",
	// 					title: "An error occured",
	// 					text: "Server  or Network error",
	// 					//   footer: '<a href="">Why do I have this issue?</a>'
	// 				});

	// 				setLoading(false);
	// 			});
	// 	}
	// };

	return (
		<div style={{ backgroundColor: "#f3f7fb", fontFamily: "raleway" }}>
			<div class='container'>
				<div class='row justify-content-center align-items-center d-flex vh-100'>
					<div
						style={{
							background: "white",
							boxShadow: "-1px 2px 2px 2px rgba(0, 0, 0, 0.1)",
							borderRadius: "5px",
						}}
						class='col-lg-4 mx-auto'>
						<div class='osahan-login py-4'>
							<div class='text-center mb-4'>
								<a href='index.html'>
									<img src='images/fav.svg' alt='' />
								</a>
								<h5 class='font-weight-bold mt-3'>Join MyService</h5>
								<p class='text-muted'>please fill all details correctly</p>
							</div>
							<form>
								<div class='form-row'>
									<div class='col'>
										<div class='form-group'>
											<label class='mb-1'>FullName</label>
											<div class='position-relative icon-form-control'>
												<i class='mdi mdi-account position-absolute'></i>
												<input
													{...register("name")}
													required
													type='text'
													class='form-control'
												/>
											</div>
										</div>
									</div>
									<div class='col'>
										<div class='form-group'>
											<label class='mb-1'>Email</label>
											<div class='position-relative'>
												<input
													{...register("email")}
													required
													type='email'
													class='form-control'
												/>
											</div>
										</div>
									</div>
								</div>
								<div class='form-group'>
									<label class='mb-1'>Select Profession</label>
									<div class='position-relative icon-form-control'>
										<i class='mdi mdi-email-outline position-absolute'></i>
										<select
											required
											onChange={(e) => {
												setProfession(e.target.value);
											}}
											style={{
												background: "#F8FAFC",
												height: "40px",
												width: "100%",
												border: "1px solid silver",
												borderRadius: "5px",
												paddingLeft: "10px",
												fontFamily: "raleway",
											}}>
											<option disabled>select profession</option>
											<option value='Welder'>Welder</option>
											<option value='Painter'>Painter</option>
											<option value='Plumber'>Plumber</option>
											<option value='Carpenter'>Carpenter</option>
											<option value='Electrician'>Electrician</option>
											<option value='Fashion Designer'>Fashion Designer</option>
											<option value='Brick Layer'>Brick Layer</option>
											<option value='Truck Pusher'>Truck Pusher</option>
											<option value='Hair Cut'>Hair Cut</option>
											<option value='Ac & Refrigerator'>
												Ac & Refrigerator
											</option>
											<option value='Genrator & Car'>Genrator & Car</option>
										</select>
									</div>
								</div>
								<div class='form-group'>
									<label class='mb-1'>House Address</label>
									<div class='position-relative icon-form-control'>
										<i class='mdi mdi-email-outline position-absolute'></i>
										<input
											{...register("address")}
											required
											type='text'
											class='form-control'
										/>
									</div>
								</div>
								<div class='form-group'>
									<label class='mb-1'>Location</label>
									<div class='position-relative icon-form-control'>
										<i class='mdi mdi-email-outline position-absolute'></i>
										<Autocomplete
											aria-required
											style={{
												background: "#F8FAFC",
												height: "40px",
												width: "100%",
												border: "1px solid silver",
												borderRadius: "5px",
												paddingLeft: "10px",
											}}
											apiKey='AIzaSyBIe8lcH1rTX_sBfYeopfTGOjudCxQoPGo'
											onPlaceSelected={(place) => {
												console.log("hdshhfjjdf", place?.formatted_address);
												setLocation(place?.formatted_address);
											}}
										/>
									</div>
								</div>
								<div class='form-group'>
									<label class='mb-1'>Password (6 or more characters)</label>
									<div class='position-relative icon-form-control'>
										<i class='mdi mdi-key-variant position-absolute'></i>
										<input
											{...register("password")}
											required
											type='password'
											class='form-control'
										/>
									</div>
								</div>
								<div class='form-group'>
									<label class='mb-1'>
										You agree to the Miver <a href='#'>User Agreement</a>,{" "}
										<a href='#'>Privacy Policy</a>, and{" "}
										<a href='#'>Cookie Policy</a>.
									</label>
								</div>

								<div
									class='theme-btn btn-style-two'
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										cursor: "pointer",
									}}>
									<span
										onClick={onSubmit}
										style={{ color: "white", width: "500px" }}
										class='btn-title'>
										Create Account
									</span>
								</div>

								<div
									style={{
										textAlign: "center",
										width: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
									class='py-3 d-flex align-item-center'>
									<span class='ml-auto'>
										Already on MyService? <a href='/signin-artecian'>Sign in</a>
									</span>
								</div>
							</form>
						</div>
					</div>
					{loading ? <Loading /> : null}
				</div>
			</div>
		</div>
	);
};

export default RegisterArtecian;
