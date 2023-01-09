import React from 'react';
import { useNavigate } from 'react-router-dom';

import SNavigateBackButtonView from './SNavigateBackButton.view';

interface IProps {
	readonly theme: 'light' | 'dark';
	readonly navigateTwice?: boolean;
}

const SNavigateBackButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	return (
		<SNavigateBackButtonView
			theme={props.theme}
			onGoBack={() => navigate(props.navigateTwice ? -2 : -1)}
		/>
	);
};

SNavigateBackButton.displayName = 'SNavigateBackButton';
SNavigateBackButton.defaultProps = {};

export default React.memo(SNavigateBackButton);
