import React from 'react';

import SPageView from './STransitions.view';

interface IProps {}

const STransitions: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <SPageView childrens={props.children} />;
};

STransitions.displayName = 'STransitions';
STransitions.defaultProps = {};

export default React.memo(STransitions);
