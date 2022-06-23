import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { GlobalContext } from "./GlobalContext";
import decoded from "jwt-decode";

const PrivateRoute = ({ children }) => {
	const user = useSelector((state) => state?.persistedReducer?.current);

	// var token = user?.token;
	// var decode = decoded(token);
	// const { isDeveloper, verified } = decoded;
	// const saveItem = JSON.parse(localStorage.getItem("dataUsers"));

	return <div>{user?.verified ? children : <Navigate to='/register' />}</div>;
};

export default PrivateRoute;
