import React, { useContext } from "react";
import "./regart.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "./LoadState";
import { useDispatch } from "react-redux";
import { user } from "./Global/actions";
import { useNavigate } from "react-router-dom";
const UsersSignin = () => {
	const dispach = useDispatch();
	const hist = useNavigate();
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
		const url = `https://myserviceprojectapi.herokuapp.com/api/user/login`;

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
				hist("/user-dashboard");
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

	return (
		<div style={{ backgroundColor: "#f3f7fb", fontFamily: "raleway" }}>
			{loading ? <Loading /> : null}
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
								<h5 class='font-weight-bold mt-3'>Welcome Back</h5>
								<p class='text-muted'>login your account</p>
							</div>
							<form>
								<div class='form-row'>
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
								<div class='form-group'>
									<label class='mb-1'>
										You agree to the MyService <a href='#'>User Agreement</a>,{" "}
										<a href='#'>Privacy Policy</a>, and{" "}
										<a href='#'>Cookie Policy</a>.
									</label>
								</div>

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
											LogIn
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
										Already on MyService? <a href='/user-register'>Sign in</a>
									</span>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UsersSignin;
