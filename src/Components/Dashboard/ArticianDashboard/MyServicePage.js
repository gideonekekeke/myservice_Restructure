import axios from "axios";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { GlobalContext } from "../../Global/GlobalContext";
import ArtecianHeader from "./ArtecianHeader";
import ArtecianSideBar from "./ArtecianSideBar";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import Loading from "../../LoadState";

const MyServicePage = () => {
	const { current } = useContext(GlobalContext);
	const [data, setData] = React.useState([]);
	const [load, setLoad] = React.useState(true);
	const [loading, setLoading] = React.useState(false);

	const toggleLoad = () => {
		setLoading(true);
	};
	const getUserData = async () => {
		await axios
			.get(
				`https://myserviceprojectapi.herokuapp.com/api/artician/${current._id}`,
			)
			.then((response) => {
				setData(response?.data?.data);
				setLoad(false);
				console.log("dhdffhf", response?.data?.data);
			});
	};

	const schema = yup.object().shape({
		title: yup.string().required("this field is required"),
		material: yup.string().required("this field is required"),
		price: yup.number().required("this field is required"),
	});

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const PostService = handleSubmit(async (val) => {
		const { title, material, price } = val;
		console.log(val);
		console.log(errors);
		toggleLoad();
		await axios
			.post(
				`https://myserviceprojectapi.herokuapp.com/api/service/${current?._id}/create`,
				{
					title,
					material,
					price,
				},
			)
			.then((response) => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: response?.data?.message,
					showConfirmButton: false,
					timer: 2500,
				});
				reset();
				setLoading(false);
			})
			.catch(() => {
				Swal.fire({
					position: "center",
					icon: "error",
					title: "An error occured",
					showConfirmButton: false,
					timer: 2500,
				});
				setLoading(false);
			});
	});

	React.useEffect(() => {
		getUserData();
	}, [current]);
	return (
		<div class='page-wrapper dashboard'>
			<ArtecianHeader />
			<ArtecianSideBar />

			<section class='user-dashboard'>
				<div class='dashboard-outer'>
					<div class='upper-title-box'>
						<h3>Add and View Your Service</h3>
						<div class='text'>{current?.profession}</div>
					</div>
					<div>Add your service </div>
					<form onSubmit={PostService}>
						<div class='row'>
							{current?.profession === "Painter" ? (
								<>
									<p>select One</p>
									<select
										{...register("title")}
										style={{
											height: "50px",
											margin: "5px",
											borderRadius: "10px",
										}}>
										<option value='' disabled selected>
											Select a title
										</option>
										<option value='one room painting'>one room painting</option>
										<option value='two rooms painting'>
											two rooms painting
										</option>
										<option value='Flat painting'>Flat painting</option>
										<option value='POP Screeding'>POP Screeding</option>
										<option value='Wallpaper Installation'>
											Wallpaper Installation
										</option>
										<option value='3DWallpaper Installation'>
											Wallpaper Installation
										</option>
										<option value='Stricco Effects'>Stricco Effects</option>
										<option value='Marble Effects'>Marble Effects</option>
									</select>
									<p style={{ color: "red" }}>{errors?.title?.message}</p>
								</>
							) : null}
							{current?.profession === "Genrator & Car" ? (
								<>
									<p>select One</p>
									<select
										{...register("title")}
										style={{
											height: "50px",
											margin: "5px",
											borderRadius: "10px",
										}}>
										<option disable>Select a title</option>
										<option value='Small Generator'>Small Generator</option>
										<option value='Big Generator'>Big Generator</option>
										<option value='Car Repair'>Car Repair</option>
									</select>
									<p style={{ color: "red" }}>{errors?.title?.message}</p>
								</>
							) : null}
							{current?.profession === "Ac & Refrigerator" ? (
								<>
									<p>select One</p>
									<select
										{...register("title")}
										style={{
											height: "50px",
											margin: "5px",
											borderRadius: "10px",
										}}>
										<option value='' disabled selected hidden>
											Select a title
										</option>
										<option
											value='Refrigerator
'>
											Refrigerator
										</option>
										<option
											value='Freezer
'>
											Freezer
										</option>
										<option
											value='AC Installation / Unistallation
'>
											AC Installation / Unistallation
										</option>
										<option
											value='Ac Repairs
'>
											Ac Repairs
										</option>
										<option
											value='AC Service
'>
											AC Service
										</option>
									</select>
									<p style={{ color: "red" }}>{errors?.title?.message}</p>
								</>
							) : null}
							{current?.profession === "HairCut" ? (
								<>
									<p>select One</p>
									<select
										{...register("title")}
										style={{
											height: "50px",
											margin: "5px",
											borderRadius: "10px",
										}}>
										<option value='' disabled selected hidden>
											Select a title
										</option>
										<option value='Men'>Men</option>
										<option value='Women'>Women</option>
										<option value='Children'>Children</option>
									</select>
									<p style={{ color: "red" }}>{errors?.title?.message}</p>
								</>
							) : null}
							{current?.profession === "Carpenter" ? (
								<>
									<p>select One</p>
									<select
										{...register("title")}
										style={{
											height: "50px",
											margin: "5px",
											borderRadius: "10px",
										}}>
										<option value='' disabled selected hidden>
											Select a title
										</option>
										<option value='House Zinc / Roofs'>
											House Zinc / Roofs
										</option>
										<option value='Door'>Door</option>
										<option value='Funiture Repair'>Funiture Repair</option>
										<option value='Wall Drill & Hang'>Wall Drill & Hang</option>
										<option value='CupBoard & Drawer'>CupBoard & Drawer</option>
										<option value='Bed'>Bed</option>
										<option value='Balcony'>Balcony</option>
									</select>
									<p style={{ color: "red" }}>{errors?.title?.message}</p>
								</>
							) : null}
							{current?.profession === "Plumber" ? (
								<>
									<p>select One</p>
									<select
										{...register("title")}
										style={{
											height: "50px",
											margin: "5px",
											borderRadius: "10px",
										}}>
										<option value='' disabled selected hidden>
											Select a title
										</option>
										<option value='Toilets'>Toilets</option>
										<option value='Basin & Sink'>Basin & Sink</option>
										<option value='Pumps'>Pumps</option>
										<option value='Tap & Mixer'>Tap & Mixer</option>
										<option value='Bath Fitting'>Bath Fitting</option>
										<option value='Drainage Pipes'>Drainage Pipes</option>
										<option value='Water Pipe Connection'>
											Water Pipe Connection
										</option>
										<option value='Basin & Sink'>Basin & Sink</option>
									</select>
									<p style={{ color: "red" }}>{errors?.title?.message}</p>
								</>
							) : null}
							{current?.profession === "Electrician" ? (
								<>
									<p>select One</p>
									<select
										{...register("title")}
										style={{
											height: "50px",
											margin: "5px",
											borderRadius: "10px",
										}}>
										<option value='' disabled selected hidden>
											Select a title
										</option>
										<option value='Wiring'>Wiring</option>
										<option value='Distribution Board & Fuse'>
											Distribution Board & Fuse
										</option>
										<option value='Fan Repair'>Fan Repair</option>
										<option value='Tv Installation'>Wiring</option>
										<option value='Inverter and Stabilizer'>
											Inverter and Stabilizer
										</option>
										<option value='Switch & Socket'>Switch & Socket</option>
										<option value='Lights'>Lights</option>
										<option value='Pumping machine'>Pumping machine</option>
										<option value='ChangeOver & Isolator machine'>
											ChangeOver & Isolator
										</option>
									</select>
									<p style={{ color: "red" }}>{errors?.title?.message}</p>
								</>
							) : null}
							<p>Materials For this Service</p>
							<textarea
								{...register("material")}
								placeholder='Enter materials needed for this service'
								style={{ height: "70px", margin: "5px", borderRadius: "10px" }}
							/>
							<p style={{ color: "red" }}>{errors?.material?.message}</p>
							<p>Enter amount in (#)</p>
							<input
								{...register("price")}
								type='number'
								placeholder='Enter amount you are charging for this service'
								style={{ height: "50px", margin: "5px", borderRadius: "10px" }}
							/>
							<p style={{ color: "red" }}>{errors?.price?.message}</p>
							<a
								onClick={PostService}
								style={{ width: "200px", color: "white" }}
								class='theme-btn btn-style-two'>
								<span class='btn-title'>Add Service</span>
							</a>
						</div>
					</form>
					<br />

					<div class='row'>
						<div class='col-lg-12'>
							<div class='ls-widget'>
								<div class='tabs-box'>
									<div class='widget-title'>
										<h4>All Services</h4>
									</div>

									<div class='widget-content'>
										<div class='table-outer'>
											<table class='default-table manage-job-table'>
												<thead>
													<tr>
														<th>Title</th>
														<th>Materials</th>
														<th>Price(#)</th>
														<th>Action</th>
													</tr>
												</thead>
												{load ? <ClipLoader size={30} /> : null}
												{data?.produ <= 0 ? <div>No Service Added</div> : null}

												{data?.produ?.map((props) => (
													<tbody>
														<tr>
															<td>
																<h6> {props?.title}</h6>
															</td>
															<td>{props?.material}</td>
															<td> {props?.price} </td>
															<td>
																<div class='option-box'>
																	<ul class='option-list'>
																		<li>
																			<button data-text='View Aplication'>
																				<span class='la la-eye'></span>
																			</button>
																		</li>
																		<li>
																			<button data-text='Delete Aplication'>
																				<span class='la la-trash'></span>
																			</button>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
													</tbody>
												))}
											</table>
										</div>

										{loading ? <Loading /> : null}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default MyServicePage;
