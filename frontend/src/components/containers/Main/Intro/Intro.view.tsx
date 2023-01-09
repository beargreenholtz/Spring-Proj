import React from 'react';

import SSvg from '../../../ui/SSvg';
import SNavigationBox from '../../../ui/SNavigationBox';

import classes from './Intro.module.scss';
import type { IProjectsList } from '../../../../interfaces/responses';

interface IProps {
	readonly projectsList: IProjectsList[];
	readonly onNevigateToMenu: () => void;
}

const IntroView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<button type="button" className={classes['brandLogo']} onClick={props.onNevigateToMenu}>
				<SSvg name="brandLogo" className={classes['brandLogo__icon']} />
			</button>
			{props.projectsList.map((project, i) => {
				if (i !== 0) {
					return;
				}
				const projectName = project.attributes.name;
				const category = project.attributes.categories.data[0]?.attributes.name;
				const year = project.attributes.categories.data[0]?.attributes.createdAt.split('-')[0] ?? '';
				const media = project.attributes.media.data[0]?.attributes.url;

				return (
					<>
						<div className={classes['backgroundContainer']}>
							<img
								key={i}
								className={classes['backgroundContainer__img']}
								src={`http://localhost:1337${media}`}
								alt="background"
							/>
						</div>
						<SNavigationBox projectName={projectName} category={category} year={year} />
					</>
				);
			})}
		</div>
	);
};

IntroView.displayName = 'IntroView';
IntroView.defaultProps = {};

export default React.memo(IntroView);
