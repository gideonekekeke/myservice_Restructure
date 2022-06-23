import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
const WorkersModal = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "rgba(0,0,0, 0.5)",
				height: "100vh",
				position: "fixed",
				width: "100%",
				zIndex: "1000",
			}}
			class='model'>
			<Card id='login-modal'>
				<UpHold>
					<UserImage />
					<MainHold>
						<h5>Name</h5>
						<div style={{ color: "silver" }}>Electrician</div>
						<p style={{ color: "black" }}>
							In publishing and graphic design, Lorem ipsum is a placeholder
							text commonly used to demonstrate the visual form of a document or
						</p>
					</MainHold>
				</UpHold>
				<ButHold>
					<div style={{ color: "silver" }}>Services Offered</div>
					<But1>Chat</But1>
					<But>Call</But>
				</ButHold>

				<div style={{ dispay: "flex" }}>
					<h4 style={{ color: "black", fontWeight: "bold" }}>Wire 2 rooms </h4>
					<div> 2 copper wire, 10 clips , 1hammer </div>
					<div>#10,000</div>
					<But2>Pay For This Service</But2>
				</div>
                <br/>
                <Link style = {{display : 'flex', justifyContent : 'center', alignItems : "center"}} to ="/">
                View More
                </Link>
			</Card>
		</div>
	);
};

export default WorkersModal;
const But1 = styled.div`
	height: 40px;
	width: 120px;
	background-color: #22218c;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	border-radius: 10px;
    cursor : pointer
`;
const But2 = styled.div`
	height: 40px;
	/* width: 120px; */
	background-color: #22218c;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	border-radius: 10px;
    cursor: pointer;
`;
const But = styled.div`
	height: 40px;
	width: 120px;
	background-color: red;
	display: flex;
	justify-content: center;
    align-items: center;
    color : white;
    border-radius : 10px
`;
const ButHold = styled.div`
display : flex;
justify-content : space-between;

margin-top:  10px;
align-items: center;
width : 100%
`



const MainHold = styled.div`
margin-left: 10px;

p{
    width : 250px
}

`;
const UserImage = styled.div`
height : 150px;
width : 150px;
background : silver;
border-radius : 5px
`;
const UpHold = styled.div`

display : flex
`

const Card = styled.div`
	width: 500px;
	background: white;
	padding: 30px;
	border-radius: 10px;
    font-family: raleway;

	textarea {
		width: 100%;
		height: 200px;
		padding: 10px;
	}

	@media screen and (max-width: 790px) {
	}
`;
