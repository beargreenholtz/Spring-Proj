import React from 'react';
import { useNavigate } from 'react-router-dom';

import type { IProjectsList } from '../../../../interfaces/responses';
import IntroView from './Intro.view';

interface IProps {
	readonly projectsList: IProjectsList[];
}

const Intro: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const nevigate = useNavigate();

	const onNevigateToMenu = () => nevigate('/menu');

	return <IntroView projectsList={props.projectsList} onNevigateToMenu={onNevigateToMenu} />;
};

Intro.displayName = 'Intro';
Intro.defaultProps = {};

export default React.memo(Intro);
