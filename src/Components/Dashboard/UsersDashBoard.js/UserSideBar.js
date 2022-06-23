import React from "react";
import { Link } from "react-router-dom";

const UserSideBar = () => {
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
						<a style={{ color: "white" }}>
							{" "}
							<i style={{ color: "white" }} class='la la-comment-o'></i>{" "}
							Messages
						</a>
					</li>
					<li style={{ color: "white" }}>
						<a style={{ color: "white" }}>
							{" "}
							<i style={{ color: "white" }} class='la la-user-tie'></i> My
							Profile
						</a>
					</li>
					<li style={{ color: "white" }}>
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
