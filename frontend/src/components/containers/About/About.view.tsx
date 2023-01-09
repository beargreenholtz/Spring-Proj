import React from 'react';
import { motion } from 'framer-motion';

import SSvg from '../../ui/SSvg';
import SPageHeader from '../../ui/SPageHeader';
import type { IAboutContent } from '../../../interfaces/responses';

import classes from './About.module.scss';
import { concatDiverseClasses } from '../../../utils/component';

interface IProps {
	readonly aboutContent: IAboutContent | null;
}

const AboutView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const header = props.aboutContent?.attributes.header;
	const description = props.aboutContent?.attributes.description;
	const imageUrl = props.aboutContent?.attributes.media.data.attributes.url;

	const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

	return (
		<motion.section
			className={classes['container']}
			initial={{ height: 0 }}
			animate={{ height: '100%' }}
			exit={{ y: -window.innerHeight }}
			transition={transition}
		>
			<SPageHeader />
			<div className={concatDiverseClasses(classes['innerAbout'], 'animate__animated animate__fadeIn')}>
				<div className={classes['aboutContainer']}>
					<div className={classes['location']}>
						<SSvg name="arrowRight" className={classes['location__icon']} />
						<span className={classes['location__text']}>about</span>
					</div>
					<div className={classes['contentContainer']}>
						<motion.img
							className={classes['contentContainer__img']}
							src={`http://localhost:1337${imageUrl}`}
							alt="about"
						/>
						<div className={classes['innerContent']}>
							<h2 className={classes['innerContent__header']}>{header}</h2>
							<p className={classes['innerContent__description']}>{description}</p>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

AboutView.displayName = 'AboutView';
AboutView.defaultProps = {};

export default React.memo(AboutView);
