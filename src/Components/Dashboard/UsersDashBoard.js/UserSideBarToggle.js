import React, { useContext } from "react";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { FaSwatchbook } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../Global/actions";
import { useDispatch } from "react-redux";

const UserSideBarToggle = ({ toggleShow }) => {
	const hist = useNavigate();
	const dispatch = useDispatch();
	return (
		<MainSide>
			<SubMenu>
				<br />
				<br />
				<br />
				<br />
				<br />

				<Link to='/user-dashboard'>
					<li
						style={{
							color: "white",
							marginLeft: "30px",
							paddingBottom: "15px",
						}}
						class='active'>
						<a onClick={toggleShow} style={{ color: "white" }}>
							{" "}
							<i style={{ color: "white" }} class='la la-home'></i> Dashboard
						</a>
					</li>
				</Link>

				<Link to='/upload-project'>
					<li
						style={{
							color: "white",
							marginLeft: "30px",
							paddingBottom: "15px",
						}}
						class='active'>
						<a onClick={toggleShow} style={{ color: "white" }}>
							{" "}
							<i style={{ color: "white" }} class='la la-paper-plane'></i>{" "}
							Upload Project
						</a>
					</li>
				</Link>
				<Link to='/all-projects'>
					<li
						style={{
							color: "white",
							marginLeft: "30px",
							paddingBottom: "15px",
						}}
						class='active'>
						<a onClick={toggleShow} style={{ color: "white" }}>
							{" "}
							<i style={{ color: "white" }} class='la la-file-invoice'></i> View
							All Projects
						</a>
					</li>
				</Link>

				<Link to='/allmessage'>
					<li
						style={{
							color: "white",
							marginLeft: "30px",
							paddingBottom: "15px",
						}}>
						<a onClick={toggleShow} style={{ color: "white" }}>
							{" "}
							<i style={{ color: "white" }} class='la la-comment-o'></i>{" "}
							Messages
						</a>
					</li>
				</Link>

				<li
					style={{
						color: "white",
						marginLeft: "30px",
						paddingBottom: "15px",
					}}
					onClick={() => {
						dispatch(signOut());
						window.location.reload(hist("/"));
					}}>
					<a style={{ color: "white" }}>
						{" "}
						<i style={{ color: "white" }} class='la la-sign-out'></i> Logout
					</a>
				</li>
			</SubMenu>
		</MainSide>
	);
};

export default UserSideBarToggle;

// <li
// 	style={{
// 		color: "white",
// 		marginLeft: "30px",
// 		paddingBottom: "15px",
// 	}}>
// 	<a style={{ color: "white" }}>
// 		{" "}
// 		<i style={{ color: "white" }} class='la la-user-tie'></i> My Profile
// 	</a>
// </li>

const MainSide = styled.div`
	width: 100%;
	background: rgba(0%, 0%, 0%, 0.5);
	z-index: 1;
	height: 100vh;
	position: fixed;
	top: 0;
	color: black;
	transition: all 350ms;
`;

// const SubUser = styled.div`
// 	display: flex;
// 	height: 100px;
// 	justify-content: space-between;
// 	align-items: center;
// 	padding: 0px 30px;

// 	img {
// 		width: 50px;
// 		height: 50px;
// 		border-radius: 25px;
// 		object-fit: cover;
// 		border: 2px solid white;
// 	}

// 	span {
// 		font-size: 15px;
// 		font-weight: bold;
// 	}
// `;

const SubMenu = styled.div`
	width: 250px;
	height: 100vh;
	background-color: #22218c;
	/* float: right; */
	border-radius: 0 0 0px 10px;
	display: flex;
	flex-direction: column;
	padding-left: 20px;
	position: fixed;
	color: black;
	z-index: 1000;
	top: 0;
	/* padding-top: 50px;
		padding-left: 50px; */
	z-index: 1000;
	transition: all 350ms;

	@media screen and (max-width: 600px) {
		font-size: 17px;
	}
`;
