import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';
import SCategory from '../../../ui/SCategory';
import type { IType } from '../../../../interfaces/responses';
// import 'animate.css';

import classes from './Intrested.module.scss';
import SSvg from '../../../ui/SSvg';
import { concatDiverseClasses } from '../../../../utils/component';

interface IProps {
	readonly selectedType: IType[];
	readonly typesList: IType[];
	readonly onSelectType: (_: IType) => void;
}

const IntrestedView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<h2 className={classes['container__title']}>What intrested you the most?</h2>
			<div className={classes['innerTypes']}>
				{props.typesList.map((type) => (
					<SCategory
						key={type.id}
						element={type}
						selectedElements={props.selectedType}
						onSelectElement={props.onSelectType}
					/>
				))}
			</div>
			{props.selectedType.length !== 0 && (
				<>
					<h3
						className={concatDiverseClasses(
							classes['firstLine'],
							'animate__animated animate__fadeIn',
						)}
					>
						Great!
					</h3>

					<button className={classes['secondLine']} type="button">
						<h2
							className={concatDiverseClasses(
								classes['secondLine__text'],
								'animate__animated animate__fadeInLeft',
							)}
						>
							lets talk!
						</h2>
						<SSvg name="arrowRight" className={classes['secondLine__icon']} />
					</button>
				</>
			)}
		</div>
	);
};

IntrestedView.displayName = 'IntrestedView';
IntrestedView.defaultProps = {};

export default React.memo(IntrestedView);
