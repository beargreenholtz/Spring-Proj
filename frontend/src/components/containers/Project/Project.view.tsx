import React from 'react';

import SNavigateBackButton from '../../ui/SNavigateBackButton';
import { IProjectContent } from '../../../interfaces/responses';

import classes from './Project.module.scss';

interface IProps {
	readonly projectContent: IProjectContent | null;
}

const ProjectView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const videoUrl = props.projectContent?.attributes.video;
	const name = props.projectContent?.attributes.name;
	const categories = props.projectContent?.attributes.categories.data;
	const year =
		props.projectContent?.attributes.categories.data[0]?.attributes.createdAt.split('-')[0] ?? '';

	const mediaGallery = props.projectContent?.attributes.media.data;

	console.log(mediaGallery, 'props.mediaGallery');

	return (
		<section className={classes['container']}>
			<div className={classes['navigateBack']}>
				<SNavigateBackButton theme="light" navigateTwice />
			</div>
			<div className={classes['innerVideo']}>
				<iframe
					src={videoUrl}
					title="YouTube video player"
					style={{ border: 'none', width: '100%', height: '100%' }}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				/>
			</div>
			<div className={classes['textContainer']}>
				<div className={classes['firstLine']}>
					<div className={classes['firstLine__name']}>{name}</div>
					<div className={classes['firstLine__category']}>
						{categories ? categories[0]?.attributes.name : ''}
					</div>
					<div className={classes['firstLine__year']}>{year}</div>
				</div>
				<div className={classes['secondLine']}>test</div>
			</div>
			<h2>{name}</h2>
			<div className={classes['galleryContainer']}>
				{mediaGallery
					? mediaGallery.map((item, i) => {
							const url = item.attributes.url;
							return (
								<div key={i} className={classes['innerImage']}>
									<img
										className={classes['innerImage__image']}
										src={`http://localhost:1337${url}`}
										alt="gallery"
									/>
								</div>
							);
					  })
					: null}
			</div>
		</section>
	);
};

ProjectView.displayName = 'ProjectView';
ProjectView.defaultProps = {};

export default React.memo(ProjectView);
