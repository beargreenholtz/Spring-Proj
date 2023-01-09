import React from 'react';

import WorksView from './Works.view';

interface IProps {}

const Works: React.FC<IProps> = () => {
	return <WorksView />;
};

Works.displayName = 'Works';
Works.defaultProps = {};

export default React.memo(Works);
