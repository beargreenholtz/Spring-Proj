import React from 'react';

import classes from './Works.module.scss';

interface IProps {}

const WorksView: React.FC<IProps> = () => {
	return <section className={classes['container']}>works page</section>;
};

WorksView.displayName = 'WorksView';
WorksView.defaultProps = {};

export default React.memo(WorksView);
