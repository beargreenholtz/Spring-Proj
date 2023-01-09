import React from 'react';
import { motion } from 'framer-motion';

import SPageHeader from '../../ui/SPageHeader';
import SSvg from '../../ui/SSvg';
import { socialMedia } from '../../../data/social-media';
import { concatDiverseClasses } from '../../../utils/component';
import type { IContactContent } from '../../../interfaces/responses';

import classes from './Contact.module.scss';

interface IProps {
	readonly contactContent: IContactContent | null;
	readonly onMapsNavigate: () => void;
	readonly onSocialNavigate: (_: string) => void;
}

const ContactView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const emailAdress = props.contactContent?.attributes.email;
	const city = props.contactContent?.attributes.city;
	const fullAdress = props.contactContent?.attributes.fullAdress;

	const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

	return (
		<motion.section
			className={classes['container']}
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: -window.innerWidth }}
			transition={transition}
		>
			<SPageHeader />
			<div className={concatDiverseClasses(classes['innerAbout'], 'animate__animated animate__fadeIn')}>
				<div className={classes['firstPart']}>
					<div className={classes['location']}>
						<SSvg name="arrowRight" className={classes['location__icon']} />
						<span className={classes['location__text']}>contact</span>
					</div>
					<div className={classes['headerContainer']}>
						<h2 className={classes['headerContainer__header']}>Keep in touch</h2>
						<SSvg name="contactHeader" className={classes['headerContainer__icon']} />
					</div>
					<div className={classes['innerEmail']}>
						<span className={classes['innerEmail__text']}>Start a conversation</span>
						<button
							className={classes['innerEmail__email']}
							type="button"
							onClick={() => (window.location.href = `mailto:${emailAdress}`)}
						>
							{emailAdress}
						</button>
					</div>
					<div className={classes['contentContainer']}>
						<div className={classes['innerSide']}>
							<span className={classes['innerSide__subTitle']}>Location</span>
							<span className={classes['innerSide__city']}>{city}</span>
							<span className={classes['innerSide__fullAdress']}>{fullAdress}</span>
							<button
								className={classes['viewOnMap']}
								type="button"
								onClick={props.onMapsNavigate}
							>
								<SSvg name="arrowRight" className={classes['viewOnMap__icon']} />
								<span className={classes['viewOnMap__text']}>View on map</span>
							</button>
						</div>
						<div className={classes['innerSide']}>
							<span className={classes['innerSide__subTitle']}>Follow us</span>
							{socialMedia.map((element, i) => (
								<button
									key={i}
									className={classes['innerSide__title']}
									type="button"
									onClick={() => props.onSocialNavigate(element.url)}
								>
									{element.name}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className={classes['secondPart']}>
				<span className={classes['secondPart__title']}>Some of out clients</span>
				<div className={classes['innerSecondPart']}>
					<div className={classes['leftSide']}>client</div>
					<div className={classes['rightSide']}>
						<SSvg className={classes['rightSide__brandLogo']} name="brandSmallLogo" />
					</div>
				</div>
			</div>
		</motion.section>
	);
};

ContactView.displayName = 'ContactView';
ContactView.defaultProps = {};

export default React.memo(ContactView);
