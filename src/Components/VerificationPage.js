import React from "react";
import styled from "styled-components";
import { MdMarkEmailRead } from "react-icons/md";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const VerificationPage = () => {
	const hist = useNavigate();
	const { id, token } = useParams();

	const onSubmit = async () => {
		const main = "https://myservicebe.onrender.com";
		const online = "https://qlinkappi.herokuapp.com";

		const url = `${main}/api/artician/work/${id}/${token}`;

		const res = await axios.get(url).then((res) => {
			if (res) {
				console.log("seudfjdjdjdjdjdj", res);
				hist("/signin-artecian");
				window.location.reload();
			}
		});

		// window.location.reload()
	};

	return (
		<Container>
			<br />
			<br />
			<br />
			<br />
			<Cont>
				<MdMarkEmailRead />
			</Cont>
			<Box>
				<h2>Verification Success</h2>
				<p>We have successfully Verified your email, you can now proceed</p>
				<ButHol onClick={onSubmit}>CLICK TO CONTINUE </ButHol>
			</Box>
		</Container>
	);
};

export default VerificationPage;

const ButHol = styled.div`
	cursor: pointer;
	margin-top: 25px;

	:hover {
		color: #4eaa99;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	flex-direction: column;
`;

const Cont = styled.div`
	height: 150px;
	width: 150px;
	border-radius: 50%;
	background-color: #4eaa99;
	position: absolute;
	top: -30px;
	margin-top: 270px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 50px;

	@media (max-width: 1445px) {
		margin-top: 170px;
	}
`;
const Box = styled.div`
	height: 200px;
	width: 100%;
	background-color: #f9fbfa;
	display: flex;
	/* justify-content: center; */
	flex-direction: column;
	align-items: center;
	text-align: center;

	h2 {
		margin-top: 50px;
		font-weight: bold;
	}
	/* align-items: center; */
`;
