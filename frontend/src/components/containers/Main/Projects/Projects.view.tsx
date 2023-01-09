import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import { concatClasses, concatDiverseClasses } from '../../../../utils/component';

import SCategory from '../../../ui/SCategory';
import type { ICategory, IProjectsList, IType } from '../../../../interfaces/responses';

interface IProps {
	readonly isVisible: boolean;
	readonly categoriesList: ICategory[];
	readonly selectedCategories: ICategory[];
	readonly selectedTypes: IType[];
	readonly projectsList: IProjectsList[];
	readonly typesList: IType[];
	readonly onViewPort: (_: boolean) => void;
	readonly onSelectCategory: (_: ICategory) => void;
	readonly onSelectAllCategories: () => void;
	readonly onSelectType: (_: IType) => void;
	readonly onSelectAllTypes: () => void;
	readonly onNavigateToProject: (_: string) => void;
}

import classes from './Projects.module.scss';
import SProjectCard from '../../../ui/SProjectCard';

const ProjectsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const headerClasses = props.isVisible
		? concatDiverseClasses(
				classes['container__header'],
				classes['container__header--visible'],
				'animate__animated animate__zoomIn',
		  )
		: concatClasses(classes, 'container__header', 'container__header--hidden');

	const allCategoriesButtonClasses =
		props.selectedCategories.length === 0
			? concatClasses(classes, 'innerRow__all', 'innerRow__all--selected')
			: classes['innerRow__all'];

	const allTypesButtonClasses =
		props.selectedTypes.length === 0
			? concatClasses(classes, 'innerRow__all', 'innerRow__all--selected')
			: classes['innerRow__all'];

	return (
		<section className={classes['container']}>
			<VisibilitySensor offset={{ bottom: 50 }} onChange={props.onViewPort}>
				<>
					<h1 className={headerClasses}>Make things happen.</h1>
					<div className={classes['innerCategories']}>
						<span className={classes['innerCategories__title']}>Projects:</span>
						<div className={classes['filtersList']}>
							<div className={classes['innerRow']}>
								<button
									className={allCategoriesButtonClasses}
									type="button"
									onClick={props.onSelectAllCategories}
								>
									All
								</button>
								{props.categoriesList.map((category) => (
									<SCategory
										key={category.id}
										element={category}
										selectedElements={props.selectedCategories}
										onSelectElement={props.onSelectCategory}
									/>
								))}
							</div>
							<div className={classes['innerRow']}>
								<button
									className={allTypesButtonClasses}
									type="button"
									onClick={props.onSelectAllTypes}
								>
									All
								</button>
								{props.typesList.map((type) => (
									<SCategory
										key={type.id}
										element={type}
										selectedElements={props.selectedTypes}
										onSelectElement={props.onSelectType}
									/>
								))}
							</div>
						</div>
					</div>
					<div className={classes['innerProjects']}>
						<div className={classes['projectsContainer']}>
							{props.projectsList.map((project, i) => {
								const isEven = i % 2 === 0;
								const projectId = project.id.toString();
								const projectName = project.attributes.name;
								const category = project.attributes.categories.data[0]?.attributes.name;
								const year =
									project.attributes.categories.data[0]?.attributes.createdAt.split(
										'-',
									)[0] ?? '';
								const media = project.attributes.media.data[0]?.attributes.url;

								if (i % 2 !== 0) {
									return;
								}

								return (
									<button
										key={project.id}
										type="button"
										className={classes[`${isEven ? 'leftProject' : 'rightProject'}`]}
										onClick={() => props.onNavigateToProject(projectId)}
									>
										<SProjectCard
											projectName={projectName}
											category={category}
											year={year}
											media={media}
										/>
									</button>
								);
							})}
						</div>
						<div
							className={classes['projectsContainer']}
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							{props.projectsList.map((project, i) => {
								const isEven = i % 2 === 0;
								const projectId = project.id.toString();
								const projectName = project.attributes.name;
								const category = project.attributes.categories.data[0]?.attributes.name;
								const year =
									project.attributes.categories.data[0]?.attributes.createdAt.split(
										'-',
									)[0] ?? '';
								const media = project.attributes.media.data[0]?.attributes.url;

								if (i % 2 === 0) {
									return;
								}

								return (
									<button
										key={project.id}
										type="button"
										className={classes[`${isEven ? 'leftProject' : 'rightProject'}`]}
										onClick={() => props.onNavigateToProject(projectId)}
									>
										<SProjectCard
											projectName={projectName}
											category={category}
											year={year}
											media={media}
										/>
									</button>
								);
							})}
						</div>
					</div>
				</>
			</VisibilitySensor>
		</section>
	);
};

ProjectsView.displayName = 'ProjectsView';
ProjectsView.defaultProps = {};

export default React.memo(ProjectsView);
