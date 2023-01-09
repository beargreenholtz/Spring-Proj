import React from 'react';

import Menu from '../components/containers/Menu';

interface IProps {}

const MenuPage: React.FC<IProps> = () => {
	return <Menu />;
};

MenuPage.displayName = 'MenuPage';
MenuPage.defaultProps = {};

export default MenuPage;
