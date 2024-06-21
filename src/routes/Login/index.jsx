import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from '../../pages/LoginForm';

const LoginRoutes = () => {
	return (
		<Routes>
			<Route path="" element={<LoginForm />} />
		</Routes>
	);
};

export default LoginRoutes;
