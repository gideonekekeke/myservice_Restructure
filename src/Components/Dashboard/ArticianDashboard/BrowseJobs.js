import React from "react";
import ArtecianHeader from "./ArtecianHeader";
import ArtecianSideBar from "./ArtecianSideBar";
import ArtesiansBidingCard from "./ArtesiansBidingCard";
import styled from "styled-components";
const BrowseJobs = () => {
	return (
		<>
			<div class=''>
				<ArtecianHeader />
				<ArtecianSideBar />

				<section class='user-dashboard'>
					<div class='dashboard-outer'>
						<Container>
							<H1>Side nav</H1>
							<Wrapper>
								<H2>Header</H2>
								<div
									style={{
										width: "100%",
										display: "flex",
										justifyContent: "center",
										marginTop: "60px",
									}}></div>
								<Jobs>
									{/* <RecentSearch/> */}
									<ArtesiansBidingCard />
								</Jobs>
							</Wrapper>
						</Container>
					</div>
				</section>
			</div>
		</>
	);
};

export default BrowseJobs;

const H1 = styled.div`
	// background-color: #22218c;
	color: white;
	font-size: 30px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20%;
	/* height: 100vh; */

	@media Screen and (max-width: 768px) {
		display: none;
	}
`;

const H2 = styled.div`
	// background-color: #22218c;
	color: white;
	font-size: 30px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 70px;

	@media Screen and (max-width: 768px) {
		width: 100%;
	}
`;
const Container = styled.div`
	width: 100%;
	height: auto;
	/* background-color: #f7f7f7; */
	display: flex;
	justify-content: center;

	@media Screen and (max-width: 768px) {
		width: 100%;
		/* background-color: red; */
	}

	@media Screen and (max-width: 320px) {
		padding: 0;
		margin: 0;
	}
`;
const Wrapper = styled.div`
	width: 80%;
	height: auto;
	flex-direction: column;
	align-items: center;

	@media Screen and (max-width: 768px) {
		width: 100%;
		overflow: hidden;
		// background-color: pink;
	}
`;
const Head = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	/* justify-content: center; */
	height: 100px;
	border-radius: 2px;
	/* background-color: orange; */
	margin-top: 10px;
	margin-bottom: 20px;
	padding: 5px 5px;
	box-shadow: rgba(5, 0, 0, 0.25) 0px 1px 4px;

	@media Screen and (max-width: 768px) {
		width: 85%;
		height: auto;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		select {
			width: 70%;
			padding: 20px 20px;
			/* border: 1px solid grey; */
			/* border-top: none; */
		}
	}

	select {
		width: 70%;
		font-size: medium;
		outline: none;
		height: 65px;
		border: none;
		padding-left: 10px;

		@media Screen and (max-width: 768px) {
			width: 90%;
			border-top: 1px solid grey;
		}
		@media Screen and (max-width: 425px) {
			width: 90%;
		}
		@media Screen and (max-width: 375px) {
			width: 92%;
		}
		/* border-left: none; */
	}
`;
const Input = styled.input`
	padding: 4px 15px;
	width: 90%;
	height: 55px;
	outline: none;
	resize: none;
	font-size: 15px;
	border: none;
	border-right: 1px solid grey;

	::placeholder {
		font-size: large;
	}

	@media Screen and (max-width: 768px) {
		width: 82%;
		border: none;
	}
`;
const Button = styled.div`
	padding: 15px 10px;
	background-color: #22218c;
	color: white;
	width: 100px;
	border-radius: 3px;
	transition: all 350ms;
	font-size: medium;
	outline: none;
	border: 0;
	margin: 10px;
	text-align: center;
	text-decoration: none;

	@media Screen and (max-width: 768px) {
		width: 75%;
	}

	@media Screen and (max-width: 425px) {
		width: 72%;
	}
	@media Screen and (min-width: 375) {
		width: 65%;
	}
	@media Screen and (min-width: 320px) {
		width: 68%;
	}
	:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
`;

const Jobs = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: red; */
`;
