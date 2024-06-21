import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../../pages/Home';
import Login from '../Login/index';
import Pagina404 from '../../pages/Pagina404';

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes key={location.pathname} location={location}>
				<Route path="/" element={<Home />} />
				<Route path="login/*" element={<Login />} />
				<Route path="*" element={<Pagina404 />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
