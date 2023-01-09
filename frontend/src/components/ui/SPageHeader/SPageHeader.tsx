import React from 'react';

import SPageView from './SPageHeader.view';

interface IProps {}

const SPageHeader: React.FC<IProps> = () => {
	return <SPageView />;
};

SPageHeader.displayName = 'SPageHeader';
SPageHeader.defaultProps = {};

export default React.memo(SPageHeader);
