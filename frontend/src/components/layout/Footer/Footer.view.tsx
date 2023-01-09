import React from 'react';
import SSvg from '../../ui/SSvg';

import classes from './Footer.module.scss';

interface IProps {}

const FooterView: React.FC<IProps> = () => {
	return (
		<div className={classes['container']}>
			<span className={classes['container__text']}>Powered by</span>
			<SSvg name="hayotaLogo" className={classes['container__brandIcon']} />
		</div>
	);
};

FooterView.displayName = 'FooterView';
FooterView.defaultProps = {};

export default React.memo(FooterView);
