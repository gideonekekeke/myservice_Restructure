import React from "react";
import styled from "styled-components";
import StarRatingComponent from "react-star-rating-component";
import axios from "axios";
const ProfilePage = ({ id }) => {
	const [data, setData] = React.useState([]);

	const gettingUser = async () => {
		await axios
			.get(`https://myserviceprojectapi.herokuapp.com/api/artician/${id}`)
			.then((response) => {
				console.log("main userdatahdfhdf", response.data.data);
				setData(response.data.data);
			});
	};

	React.useEffect(() => {
		gettingUser();
	}, []);
	return (
		<>
			{" "}
			<Hol>
				<ArtImage src={data.avatar} />
				<NameHold>
					<Name>{data.name}</Name>
					<Prof>{data.profession}</Prof>
					<Prof>
						<StarRatingComponent
							value={data?.rating?.reduce((x, b) => {
								return x + b.count / data.rating.length;
							}, 0)}
						/>
					</Prof>
				</NameHold>
			</Hol>
		</>
	);
};

export default ProfilePage;

const ArteCard = styled.div`
	width: 320px;
	margin-bottom: 10px;
	padding: 20px;
	text-decoration: none;
	background-color: white;
	color: black;
	border-radius: 5px;
	box-shadow: rgba(5, 0, 0, 0.25) 0px 1px 4px;
	margin: 10px;
	/* background-color: orange; */

	:hover {
		background-color: #f7f7f7;
		transition: all 350ms;
	}

	@media Screen and (max-width: 768px) {
		width: 95%;
		overflow: hidden;
	}
`;
const Hol = styled.div`
	display: flex;
`;
const ArtImage = styled.img`
	height: 40px;
	width: 40px;
	background: silver;
	border-radius: 50%;
	object-fit: cover;
`;
const NameHold = styled.div`
	margin-left: 10px;
`;
const Prof = styled.div`
	color: silver;
	font-size: 12px;
	margin-top: -10px;
`;
const Name = styled.div`
	font-weight: bold;
`;
