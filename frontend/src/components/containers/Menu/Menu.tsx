import React from 'react';
import { useNavigate } from 'react-router-dom';

import MenuView from './Menu.view';

interface IProps {}

const Menu: React.FC<IProps> = () => {
	const nevigate = useNavigate();

	const onNevigateToWorks = () => nevigate('/works');
	const onNevigateToAbout = () => nevigate('/about');
	const onNevigateToContact = () => nevigate('/contact');

	return (
		<MenuView
			onNevigateToWorks={onNevigateToWorks}
			onNevigateToAbout={onNevigateToAbout}
			onNevigateToContact={onNevigateToContact}
		/>
	);
};

Menu.displayName = 'Menu';
Menu.defaultProps = {};

export default React.memo(Menu);
