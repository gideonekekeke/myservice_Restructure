import React, { useContext } from "react";
import "./regart.css";
// import Swal from "sweetalert2";
// import axios from "axios";
// import Loading from "../LoadState";
// import swal from "sweetalert";
import Autocomplete from "react-google-autocomplete";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "./LoadState";
import { useDispatch } from "react-redux";
import { user } from "./Global/actions";
import { useNavigate } from "react-router-dom";
// import 'sweetalert2/src/sweetalert2.scss'
const AgentSigin = () => {
	const dispach = useDispatch();
    const hist = useNavigate()
	const yupSchema = yup.object().shape({
		email: yup.string().required("full name has to be entered"),
		password: yup.string().required("full name has to be entered"),
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
		const { email, password } = val;
		console.log(val);
		const localURL = "http://localhost:2331";
		const url = `http://localhost:5000/api/agent/login`;

		toggleLoad();
		await axios
			.post(url, {
				email,
				password,
			})
			.then((response) => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: response?.data?.message,
					showConfirmButton: false,
					timer: 2500,
				});

				console.log(response);

				dispach(user(response?.data?.data));
				setLoading(false);
                hist("/agent-dashboard")
			})
			.catch((error) => {
				Swal.fire({
					position: "center",
					icon: "error",
					title: error?.response?.data?.message,
					showConfirmButton: false,
					timer: 2500,
				});
				setLoading(false);
				console.log(error);
			});
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
								<h5 class='font-weight-bold mt-3'>Welcome Back Agent</h5>
								<p class='text-muted'>Login your account</p>
							</div>

							<div class='form-row'>
								<div class='col'></div>
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
							<div style={{ color: "red" }}>Forgot Password?</div>
							<br />
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<a onClick={onSubmit} class='theme-btn btn-style-two'>
									<span
										style={{ color: "white", width: "500px" }}
										class='btn-title'>
										Login
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
									Don't Have an Account?{" "}
									<a href='/:id/register-artecian'>Register</a>
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

export default AgentSigin;
