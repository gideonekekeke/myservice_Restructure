import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../Global/actions";

const ArtecianSideBar = () => {
	const dispatch = useDispatch();
	const hist = useNavigate();
	return (
		<div style={{ background: "#22218C" }} class='user-sidebar'>
			<div class='sidebar-inner'>
				<ul style={{ color: "white" }} class='navigation'>
					<li style={{ color: "white" }} class='active'>
						<a href='/artician-dashboard' style={{ color: "white" }}>
							{" "}
							<i style={{ color: "white" }} class='la la-home'></i> Dashboard
						</a>
					</li>
					<li>
						<a href='/my-service' style={{ color: "white" }}>
							<i style={{ color: "white" }} class='la la-file-invoice'></i>My
							Services
						</a>
					</li>
					<li>
						<a href='/browse-jobs' style={{ color: "white" }}>
							<i style={{ color: "white" }} class='la la-briefcase'></i>
							Browse Jobs
						</a>
					</li>

					<li style={{ color: "white" }}>
						<a style={{ color: "white" }} href='/pricing-packages'>
							<i style={{ color: "white" }} class='la la-box'></i>Packages
						</a>
					</li>
					<li style={{ color: "white" }}>
						<a href='/artemessage' style={{ color: "white" }}>
							{" "}
							<i style={{ color: "white" }} class='la la-comment-o'></i>{" "}
							Messages
						</a>
					</li>
					<li style={{ color: "white" }}>
						<a href='/artecian-profile' style={{ color: "white" }}>
							{" "}
							<i style={{ color: "white" }} class='la la-user-tie'></i> My
							Profile
						</a>
					</li>
					<li style={{ color: "white" }}>
						<a
							onClick={() => {
								dispatch(signOut());
								hist("/");
							}}
							style={{ color: "white" }}>
							{" "}
							<i style={{ color: "white" }} class='la la-sign-out'></i> Logout
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ArtecianSideBar;
