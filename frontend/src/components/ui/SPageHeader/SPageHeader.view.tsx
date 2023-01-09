import React from 'react';

import SNavigateBackButton from '../SNavigateBackButton';
import SSvg from '../SSvg';

import classes from './SPageHeader.module.scss';

interface IProps {}

const SPageHeaderView: React.FC<IProps> = () => {
	return (
		<div className={classes['container']}>
			<div className={classes['container__backButton']}>
				<SNavigateBackButton theme="dark" />
			</div>
			<div className={classes['brandLogo']}>
				<SSvg name="brandLogo" className={classes['brandLogo__icon']} />
			</div>
		</div>
	);
};

SPageHeaderView.displayName = 'SPageHeaderView';
SPageHeaderView.defaultProps = {};

export default React.memo(SPageHeaderView);
