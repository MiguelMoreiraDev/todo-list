import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from '../../pages/LoginForm';
import LoginCriar from '../../pages/LoginCriar';

const LoginRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginForm />} />
			<Route path="criar" element={<LoginCriar />} />
			<Route path="resetar" element={<LoginForm />} />
		</Routes>
	);
};

export default LoginRoutes;
