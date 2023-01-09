import React from 'react';

import SNavigationBoxView from './SNavigationBox.view';

interface IProps {
	readonly projectName: string;
	readonly category: string | undefined;
	readonly year: string;
}

const SNavigationBox: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <SNavigationBoxView projectName={props.projectName} category={props.category} year={props.year} />;
};

SNavigationBox.displayName = 'SNavigationBox';
SNavigationBox.defaultProps = {};

export default React.memo(SNavigationBox);
