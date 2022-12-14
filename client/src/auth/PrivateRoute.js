import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function PrivateRoute(props) {
	const { user, isLoading } = useContext(AuthContext);
	const { component: Component, ...rest } = props;
	if (isLoading) {
		return null;
	}
	if (user) {
		return <Route {...rest} render={(props) => <Component {...props} />} />;
	}
	//redirect if there is no user
	return <Redirect to="/login" />;
}
