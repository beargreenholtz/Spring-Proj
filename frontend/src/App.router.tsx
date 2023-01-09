import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

interface IProps {}

const Main = React.lazy(() => import('./pages/Main'));
const Menu = React.lazy(() => import('./pages/Menu'));
const Works = React.lazy(() => import('./pages/Works'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Project = React.lazy(() => import('./pages/Project'));

const AppRouter: React.FC<IProps> = () => {
	const location = useLocation();

	return (
		<AnimatePresence initial={false}>
			<Routes location={location} key={location.pathname}>
				<Route path="" element={<Main />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/works" element={<Works />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects/:projectId" element={<Project />} />
			</Routes>
		</AnimatePresence>
	);
};

AppRouter.displayName = 'AppRouter';
AppRouter.defaultProps = {};

export default React.memo(AppRouter);
