import axios from "axios";
import React, { useContext, useState } from "react";

import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

import Loading from "../../LoadState";
import { GlobalContext } from "../../Global/GlobalContext";
import ArtecianHeader from "../ArticianDashboard/ArtecianHeader";
import ArtecianSideBar from "../ArticianDashboard/ArtecianSideBar";
const UserProfile = () => {
	const { current } = useContext(GlobalContext);
	const hist = useNavigate();

	const myId = current?._id;

	const [name, setName] = React.useState();
	const [email, setEmail] = React.useState();
	const [avatar, setAvatar] = React.useState("");
	const [profession, setProfession] = React.useState();
	const [address, setAddress] = React.useState();

	const [description, setDescription] = React.useState();

	const [location, setLocation] = React.useState();
	const [phoneNumber, setPhoneNumber] = React.useState();
	const [loading, setLoading] = React.useState(false);
	const [prevUrl, setPrevUrl] = React.useState("");
	const [image, setImage] = React.useState("");
	const [percentage, setPercentage] = useState(0.00001);

	const toggleLoad = () => {
		setLoading(true);
	};

	const handleImage = async (e) => {
		const file = e.target.files[0];
		const save = URL.createObjectURL(file);
		setImage(save);
	};

	const postData = async () => {
		await axios
			.patch(
				`https://myserviceprojectapi.herokuapp.com/api/artician/editprofile/${myId}`,
				{
					name,
					email,
					address,
					profession,
					description,
					location,
					phoneNumber,
				},
			)
			.then((response) => {
				// console.log("update",response?.data.data)
				// edit profile from localstorage
				// const profile = JSON.parse(localStorage.getItem("dataUsers"));
				// Object.keys(response?.data?.data).forEach((key) => {
				// 	profile[key] = response?.data?.data[key];
				// });
				// localStorage.setItem("dataUsers", JSON.stringify(profile));
				swal({
					title: " Successfull",
					text: "Your Profile Has been Updated!",
					icon: "success",
					button: "ok",
				}).then((value) => {
					swal(window.location.reload());
				});
				setLoading(false);
			});
	};

	const [data, setData] = React.useState([]);

	const getUser = async () => {
		const res = await axios
			.get(`https://myserviceprojectapi.herokuapp.com/api/artician/${myId}`)
			.then((response) => {
				console.log("hdjfkkdeuhjfjjf", response?.data?.data);
				setData(response?.data?.data);
			});
	};

	const imageOnchange = (e) => {
		const file = e.target.files[0];
		const saveUrl = URL.createObjectURL(file);

		setAvatar(file);
		setPrevUrl(saveUrl);
		console.log(file);
	};

	React.useEffect(() => {
		getUser();
		console.log("my data oooogg", data);
	}, [myId]);

	const ChangeImageProfile = async () => {
		const config = {
			headers: {
				"content-type": "multipart/formdata",
			},
		};

		const formdata = new FormData();

		formdata.append("avatar", avatar);

		await axios
			.patch(
				`https://myserviceprojectapi.herokuapp.com/api/artician/editavatar/${myId}`,
				formdata,
				config,
			)
			.then((response) => {
				setLoading(false);
				window.location.reload();
				// console.log("update",response?.data.data)
				// edit profile from localstorage
				const profile = JSON.parse(localStorage.getItem("dataUsers"));
				Object.keys(response?.data?.data).forEach((key) => {
					profile[key] = response?.data?.data[key];
				});
				localStorage.setItem("dataUsers", JSON.stringify(profile));
				swal({
					title: " Successfull",
					text: "Your Profile Has been Updated!",
					icon: "success",
					button: "ok",
				}).then((value) => {
					swal(window.location.reload());
				});
			});
	};

	return (
		<>
			{loading ? <Loading /> : null}
			<div className='page-wrapper dashboard'>
				<ArtecianHeader />
				<ArtecianSideBar />
				<section style={{ marginTop: "100px" }} class='user-dashboard'>
					<div class='dashboard-outer'>
						<div class='upper-title-box'>
							<h3>My Profile</h3>
							<div class='text'>
								Edit your profile and become the top searched
							</div>
						</div>

						<div class='row'>
							<div class='col-lg-12'>
								<div class='ls-widget'>
									<div class='tabs-box'>
										<div class='widget-title'>
											<h4>My Profile</h4>
										</div>

										<div class='widget-content'>
											<form
												method='POST'
												enctype='multipart/form-data'
												onSubmit={(e) => {
													e.preventDefault();
													ChangeImageProfile();
												}}>
												<div class='uploading-outer'>
													<div
														style={{ display: "flex", flexDirection: "column" }}
														class='uploadButton'>
														<input
															class='uploadButton-input'
															type='file'
															id='upload'
															onChange={imageOnchange}
														/>
														{avatar ? (
															<div
																style={{
																	height: "140px",
																	width: "200px",
																	background: "silver",
																}}>
																<img
																	style={{
																		height: "100%",
																		width: "100%",
																		objectFit: "cover",
																	}}
																	src={prevUrl}
																/>
															</div>
														) : (
															<label
																class='uploadButton-button ripple-effect'
																for='upload'>
																Browse Pic
															</label>
														)}

														{avatar ? (
															<>
																<div style={{ marginTop: "10px" }} class=''>
																	<button
																		onClick={() => {
																			setAvatar(null);
																		}}
																		style={{ background: "red" }}
																		type='submit'
																		class='theme-btn btn-style-one'>
																		Remove Image
																	</button>
																</div>
																<div style={{ marginTop: "10px" }} class=''>
																	<button
																		onClick={() => {
																			toggleLoad();
																		}}
																		type='submit'
																		class='theme-btn btn-style-one'>
																		Save and Upload Image
																	</button>
																</div>
															</>
														) : (
															<div style={{ marginTop: "10px" }} class=''>
																<button
																	disabled
																	style={{ cursor: "not-allowed" }}
																	class='theme-btn btn-style-one'>
																	Save and Upload Image
																</button>
															</div>
														)}
														<span class='uploadButton-file-name'></span>
													</div>
													{avatar ? (
														<div class='text'>{avatar?.name}</div>
													) : (
														<div class='text'>
															Max file size is 1MB, Minimum dimension: 330x300
															And Suitable files are .jpg & .png
														</div>
													)}
												</div>
											</form>

											<form
												onSubmit={(e) => {
													postData();
													e.preventDefault();
													toggleLoad();
												}}
												class='default-form'>
												<div class='row'>
													<div class='form-group col-lg-6 col-md-12'>
														<label>Full Name</label>
														<input
															onChange={(e) => {
																setName(e.target.value);
															}}
															defaultValue={data?.name}
															type='text'
															placeholder=''
														/>
													</div>

													<div class='form-group col-lg-6 col-md-12'>
														<label>Profession</label>
														<input
															onChange={(e) => {
																setProfession(e.target.value);
															}}
															type='text'
															value={data.profession}
															defaultValue={data?.profession}
															name='name'
															placeholder='UI Designer'
														/>
													</div>

													<div class='form-group col-lg-6 col-md-12'>
														<label>Phone</label>
														<input
															onChange={(e) => {
																setPhoneNumber(e.target.value);
															}}
															type='text'
															defaultValue={data?.phoneNumber}
															name='name'
															placeholder='0 123 456 7890'
														/>
													</div>

													<div class='form-group col-lg-6 col-md-12'>
														<label>Email address</label>
														<input
															onChange={(e) => {
																setEmail(e.target.value);
															}}
															type='text'
															value={data?.email}
															defaultValue={data?.email}
															name='name'
														/>
													</div>

													<div class='form-group col-lg-6 col-md-12'>
														<label>House Address</label>
														<input
															onChange={(e) => {
																setAddress(e.target.value);
															}}
															defaultValue={data?.address}
															type='text'
															name='name'
															placeholder='your address'
														/>
													</div>

													<div class='form-group col-lg-6 col-md-12'>
														<label>Location</label>
														<input
															onChange={(e) => {
																setLocation(e.target.value);
															}}
															type='text'
															defaultValue={data?.location}
															name='name'
															placeholder='Certificate'
														/>
													</div>

													<div class='form-group col-lg-12 col-md-12'>
														<label>Description</label>
														<textarea
															onChange={(e) => {
																setDescription(e.target.value);
															}}
															defaultValue={data?.description}
															placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
													</div>

													<div class='form-group col-lg-6 col-md-12'>
														<button class='theme-btn btn-style-one'>
															Save
														</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>

								{/* <div class="ls-widget">
              <div class="tabs-box">
                <div class="widget-title">
                  <h4>Social Network</h4>
                </div>

                <div class="widget-content">
                  <form class="default-form">
                    <div class="row">
                    
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Facebook</label>
                        <input type="text" name="name" placeholder="www.facebook.com/Invision"/>
                      </div>

                 
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Twitter</label>
                        <input type="text" name="name" placeholder=""/>
                      </div>

                    
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Linkedin</label>
                        <input type="text" name="name" placeholder=""/>
                      </div>

                 
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Google Plus</label>
                        <input type="text" name="name" placeholder=""/>
                      </div>

                   
                      <div class="form-group col-lg-6 col-md-12">
                        <button class="theme-btn btn-style-one">Save</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          
            <div class="ls-widget">
              <div class="tabs-box">
                <div class="widget-title">
                  <h4>Contact Information</h4>
                </div>

                <div class="widget-content">
                  <form class="default-form">
                    <div class="row">
                    
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Country</label>
                        <select class="chosen-select">
                          <option>Australia</option>
                          <option>Pakistan</option>
                          <option>Chaina</option>
                          <option>Japan</option>
                          <option>India</option>
                        </select>
                      </div>

                  
                      <div class="form-group col-lg-6 col-md-12">
                        <label>City</label>
                        <select class="chosen-select">
                          <option>Melbourne</option>
                          <option>Pakistan</option>
                          <option>Chaina</option>
                          <option>Japan</option>
                          <option>India</option>
                        </select>
                      </div>

                
                      <div class="form-group col-lg-12 col-md-12">
                        <label>Complete Address</label>
                        <input type="text" name="name" placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."/>
                      </div>

                  
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Find On Map</label>
                        <input type="text" name="name" placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."/>
                      </div>

                     
                      <div class="form-group col-lg-3 col-md-12">
                        <label>Latitude</label>
                        <input type="text" name="name" placeholder="Melbourne"/>
                      </div>

               
                      <div class="form-group col-lg-3 col-md-12">
                        <label>Longitude</label>
                        <input type="text" name="name" placeholder="Melbourne"/>
                      </div>

                    
                      <div class="form-group col-lg-12 col-md-12">
                        <button class="theme-btn btn-style-three">Search Location</button>
                      </div>


                      <div class="form-group col-lg-12 col-md-12">
                        <div class="map-outer">
                          <div class="map-canvas map-height" data-zoom="12" data-lat="-37.817085" data-lng="144.955631" data-type="roadmap" data-hue="#ffc400" data-title="Envato" data-icon-path="images/resource/map-marker.png" data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
                          </div>
                        </div>
                      </div>

                      <div class="form-group col-lg-12 col-md-12">
                        <button class="theme-btn btn-style-one">Save</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default UserProfile;
