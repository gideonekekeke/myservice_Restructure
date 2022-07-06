import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { GlobalContext } from "./GlobalContext";
import decoded from "jwt-decode";
import UserHomeDash from "../Dashboard/UsersDashBoard.js/UserHomeDash";
import HomeScreen from "../HomeScreen";

const PrivateRoute = ({ children }) => {
	const user = useSelector((state) => state?.persistedReducer?.current);

	// if (user) {
	// 	var token = user?.token;
	// 	var decode = decoded(token);

	// 	return <div>{decode?.verified ? children : <Register />}</div>;
	// } else if (user === null) {
	// 	return <Register />;
	// }

	if (user) {
		return user.profession ? (
			<Navigate to='/artician-dashboard' />
		) : user.service ? (
			<Navigate to='/user-dashboard' />
		) : null;
	}

	return <HomeScreen />;
};

export default PrivateRoute;
