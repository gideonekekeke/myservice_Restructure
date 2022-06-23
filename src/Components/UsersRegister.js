import React, { useContext } from "react";
import "./regart.css";
// import Swal from "sweetalert2";
// import axios from "axios";
// import Loading from "../LoadState";
// import swal from "sweetalert";

import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	HStack,
	IconButton,
	Input,
	SkeletonText,
	Text,
} from "@chakra-ui/react";
import { Autocomplete } from "@react-google-maps/api";
import Swal from "sweetalert2";
import swal from "sweetalert";
import axios from "axios";
import Loading from "./LoadState";
import { useNavigate } from "react-router-dom";
import validator from "validator";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { user } from "./Global/actions";
// import 'sweetalert2/src/sweetalert2.scss'
const UserRegister = () => {
	const dispach = useDispatch()
	const hist = useNavigate();
	const [toggle, setToggle] = React.useState(false);

	const changeToggle = () => {
		setToggle(!toggle);
	};

	const [name, setName] = React.useState("");

	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [location, setLocation] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const yupSchema = yup.object().shape({
		name: yup.string().required("School name has to be filled"),
		email: yup.string().required("full name has to be entered"),
		password: yup.string().required("full name has to be entered"),
	});

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
	} = useForm({ resolver: yupResolver(yupSchema) });

	const toggleLoad = () => {
		setLoading(true);
	};

	const onSubmit = handleSubmit(async (val) => {
		const { name, email, password } = val;
		console.log(val);
		const url = `http://localhost:5000/api/user/register`;

		toggleLoad();
		await axios
			.post(url, {
				name,
				email,
				password,
				location,
			})
			.then((response) => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Account Created Successfull",
					showConfirmButton: false,
					timer: 2500,
				});
				setLoading(false);
				console.log(response)
			   dispach(user(response?.data?.data))
				hist("/")
			}).catch((error)=>{
					Swal.fire({
						position: "center",
						icon: "error",
						title: "An error occurred",
						showConfirmButton: false,
						timer: 2500,
					});
					setLoading(false)
			})
	});

	// const postData = async () => {
	// 	if (name === "" && email === "" && password === "") {
	// 		Swal.fire({
	// 			icon: "error",
	// 			title: "Empty Fields",
	// 			text: "All fields are Compulsory!",
	// 			//   footer: '<a href="">Why do I have this issue?</a>'
	// 		});
	// 	} else {
	// 		await axios
	// 			.post("https://qlinkappi.herokuapp.com/api/user/clientReg/reg ", {
	// 				name,
	// 				email,
	// 				password,
	// 			})
	// 			.then((response) => {
	// 				swal({
	// 					title: " Success",
	// 					text: "A message has been sent to your email address to confirm your account",
	// 					icon: "success",
	// 				});
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
								<h5 class='font-weight-bold mt-3'>Register Your Account</h5>
								<p class='text-muted'>
									Let's give you the best artician you need
								</p>
							</div>

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
												type='text'
												class='form-control'
											/>
										</div>
									</div>
								</div>
							</div>

							<div class='form-group'>
								<label class='mb-1'>House Address</label>
								<div class='position-relative icon-form-control'>
									<i class='mdi mdi-email-outline position-absolute'></i>
									<Autocomplete>
										<Input
											onBlur={(e) => setLocation(e.target.value.trim())}
											style={{
												background: "#F8FAFC",
												height: "40px",
												width: "100%",
												border: "1px solid silver",
												borderRadius: "5px",
												paddingLeft: "10px",
											}}
											required
											type='text'
											class='form-control'
										/>
									</Autocomplete>
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
									You agree to the MyService <a href='#'>User Agreement</a>,{" "}
									<a href='#'>Privacy Policy</a>, and{" "}
									<a href='#'>Cookie Policy</a>.
								</label>
							</div>

							<div
								onClick={onSubmit}
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<a class='theme-btn btn-style-two'>
									<span
										style={{ color: "white", width: "500px" }}
										class='btn-title'>
										Create Account
									</span>
								</a>
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
									{" "}
									Already on MyService? <a href='/user-signin'>Sign in</a>
								</span>
							</div>
						</div>
					</div>
					{loading ? <Loading /> : null}
				</div>
			</div>
		</div>
	);
};

export default UserRegister;
