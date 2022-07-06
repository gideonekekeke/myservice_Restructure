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
import { Link } from "react-router-dom";

const SideBarToggle = () => {
	return (
		<MainSide>
			<button>Student Portal</button>
			<SubMenu>
				<br />
				<br />
				<br />
				<br />

				<li style={{ fontSize: "17px", margin: "10px" }}>
					<a href='/'>
						<i class='la la-user-tie'></i>Home
					</a>
				</li>
				<li style={{ fontSize: "17px", margin: "10px" }}>
					<a href='/developers'>
						<i class='la la-paper-plane'></i>Find Developers
					</a>
				</li>
				<li style={{ fontSize: "17px", margin: "10px" }}>
					<a href='/findjob'>
						<i class='la la-briefcase'></i> Find Jobs{" "}
					</a>
				</li>
				<li style={{ fontSize: "17px", margin: "10px" }}>
					<a href='/register'>
						<i class='la la-file-invoice'></i> Register/Login
					</a>
				</li>
			</SubMenu>
		</MainSide>
	);
};

export default SideBarToggle;

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
	background-color: white;
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
`;
