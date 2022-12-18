import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { GlobalContext } from "./GlobalContext";
import decoded from "jwt-decode";
import UserHomeDash from "../Dashboard/UsersDashBoard.js/UserHomeDash";
import HomeScreen from "../HomeScreen";
import ArticianDashBoard from "../Dashboard/ArticianDashboard/ArticianDashBoard";

const PrivateRoute = ({ children }) => {
	const user = useSelector((state) => state?.persistedReducer?.current);

	if (user) {
		return (
			<div>
				{user?.profession ? (
					<ArticianDashBoard />
				) : (
					<>{user?.service ? <UserHomeDash /> : <HomeScreen />}</>
				)}
			</div>
		);
	} else {
		return <HomeScreen />;
	}

	// if (user) {
	// 	return user?.profession ? (
	// 		<ArticianDashBoard />
	// 	) : user?.service ? (
	// 		<UserHomeDash />
	// 	) : null;
	// }

	// return <HomeScreen />;
};

export default PrivateRoute;
