import React from 'react';
import { motion } from 'framer-motion';

import SNavigateBackButton from '../../ui/SNavigateBackButton';
import SSvg from '../../ui/SSvg';

import classes from './Menu.module.scss';

interface IProps {
	readonly onNevigateToWorks: () => void;
	readonly onNevigateToAbout: () => void;
	readonly onNevigateToContact: () => void;
}

const MenuView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

	return (
		<motion.section
			className={classes['container']}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={transition}
		>
			<div className={classes['background']}>
				<span />
				<span />
				<span />
				<span />
				<span />
				<span />
				<span />
				<span />
				<span />
				<span />
				<span />
				<span />
				<div className={classes['innerMenu']}>
					<div className={classes['navigateBackButton']}>
						<SNavigateBackButton theme="dark" />
					</div>
					<motion.div className={classes['brandLogo']} exit={{ opacity: 0 }}>
						<SSvg name="brandLogo" className={classes['brandLogo__icon']} />
					</motion.div>

					<motion.div className={classes['navigationContainer']} exit={{ opacity: 0 }}>
						<button
							type="button"
							className={classes['navigationContainer__button']}
							onClick={props.onNevigateToWorks}
						>
							works
						</button>
						<button
							type="button"
							className={classes['navigationContainer__button']}
							onClick={props.onNevigateToAbout}
						>
							about
						</button>
						<button
							type="button"
							className={classes['navigationContainer__button']}
							onClick={props.onNevigateToContact}
						>
							contact
						</button>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

MenuView.displayName = 'MenuView';
MenuView.defaultProps = {};

export default React.memo(MenuView);
