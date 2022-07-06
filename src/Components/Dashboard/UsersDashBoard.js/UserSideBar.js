import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../Global/actions";

const UserSideBar = () => {
	const hist = useNavigate();
	const dispatch = useDispatch();
	return (
		<div style={{ background: "#22218C" }} class='user-sidebar'>
			<div class='sidebar-inner'>
				<ul style={{ color: "white" }} class='navigation'>
					<Link to='/user-dashboard'>
						<li style={{ color: "white" }} class='active'>
							<a style={{ color: "white" }}>
								{" "}
								<i style={{ color: "white" }} class='la la-home'></i> Dashboard
							</a>
						</li>
					</Link>
					<li style={{ color: "white" }}>
						<a href='/allmessage' style={{ color: "white" }}>
							{" "}
							<i style={{ color: "white" }} class='la la-comment-o'></i>{" "}
							Messages
						</a>
					</li>

					<li
						onClick={() => {
							dispatch(signOut());
							window.location.reload(hist("/"));
						}}
						style={{ color: "white" }}>
						<a style={{ color: "white" }}>
							{" "}
							<i style={{ color: "white" }} class='la la-sign-out'></i> Logout
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default UserSideBar;
