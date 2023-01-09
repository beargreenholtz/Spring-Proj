import React from 'react';
import { motion } from 'framer-motion';

import { IProjectsList, ICategory, IType } from '../../../interfaces/responses';
import Intrested from './Intrested';

import Intro from './Intro';
import Projects from './Projects';
import Footer from '../../layout/Footer';

interface IProps {
	readonly projectsList: IProjectsList[];
	readonly categoriesList: ICategory[];
	readonly typesList: IType[];
}

const MainView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={transition}
		>
			<Intro projectsList={props.projectsList} />
			{props.projectsList.length > 0 && (
				<Projects
					projectsList={props.projectsList}
					categoriesList={props.categoriesList}
					typesList={props.typesList}
				/>
			)}
			<Intrested typesList={props.typesList} />
			<Footer />
		</motion.section>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
