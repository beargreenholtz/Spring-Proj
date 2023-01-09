import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { backendApi } from '../../../utils/http';
import type { IProjectsList, ICategory, IType } from '../../../interfaces/responses';

import MainView from './Main.view';

interface IProps {}

const Main: React.FC<IProps> = () => {
	const [projectsListState, setProjectsListState] = useState<IProjectsList[]>([]);
	const [categoriesListState, setCategoriesListState] = useState<ICategory[]>([]);
	const [typesListState, setTypesListState] = useState<IType[]>([]);

	useEffect(() => {
		backendApi.get('http://localhost:1337/api/categories').then((response: AxiosResponse) => {
			setCategoriesListState(() => response.data.data);
		});
	}, [backendApi]);

	useEffect(() => {
		backendApi.get('http://localhost:1337/api/types').then((response: AxiosResponse) => {
			setTypesListState(() => response.data.data);
		});
	}, [backendApi]);

	useEffect(() => {
		backendApi
			.get(
				'http://localhost:1337/api/projects?fields[0]=name&fields[1]=description&populate[0]=media&populate[1]=categories&populate[2]=types',
			)
			.then((response: AxiosResponse) => {
				setProjectsListState(() => response.data.data);
			});
	}, [backendApi]);

	return (
		<MainView
			projectsList={projectsListState}
			categoriesList={categoriesListState}
			typesList={typesListState}
		/>
	);
};

Main.displayName = 'Main';
Main.defaultProps = {};

export default React.memo(Main);
