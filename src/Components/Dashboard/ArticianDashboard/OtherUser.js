import axios from "axios";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { otherUsers } from "../../Global/actions";

import { GlobalContext } from "../../Global/GlobalContext";

const OtherUser = ({ dID, toggleShow, allUsers, myProp }) => {
	const dispatch = useDispatch();
	const [load, setLoad] = React.useState(true);
	const current = useContext(GlobalContext);
	const myId = current?._id;
	const [data, setData] = React.useState([]);
	const fetchDetails = async () => {
		await axios
			.get(`http://localhost:5000/api/user/${dID}`)

			.then((response) => {
				console.log("what the lord has done", response);
				setData(response?.data?.data);
			});
		setLoad(false);
	};

	React.useEffect(() => {
		fetchDetails();
		console.log("dxhjdkfdhdjkfsdfsd", dID);
	}, []);

	return (
		<>
			<>
				<div
					style={{ cursor: "pointer" }}
					onClick={() => {
						toggleShow();
						dispatch(allUsers(myProp));
						dispatch(otherUsers(data));
						localStorage.setItem("deta", JSON.stringify(myProp));
					}}
					class='p-3 d-flex align-items-center bg-light border-left border-primary  border-bottom osahan-post-header overflow-hidden'>
					<div class='dropdown-list-image mr-3'>
						<img
							style={{ objectFit: "cover" }}
							class='rounded-circle'
							src='https://i.stack.imgur.com/l60Hf.png'
							alt=''
						/>
					</div>
					<div class='font-weight-bold mr-1 overflow-hidden'>
						<div style={{ marginLeft: "10px" }} class='text-truncate'>
							{data?.name}
						</div>
					</div>
				</div>
			</>
		</>
	);
};

export default OtherUser;
