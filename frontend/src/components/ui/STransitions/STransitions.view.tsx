import React from 'react';
import { motion } from 'framer-motion';

interface IProps {
	readonly childrens: any;
}

const STransitionsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const animationConfiguration = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	};

	return (
		<motion.section
			variants={animationConfiguration}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 3 }}
		>
			{props.children}
		</motion.section>
	);
};

STransitionsView.displayName = 'STransitionsView';
STransitionsView.defaultProps = {};

export default React.memo(STransitionsView);
