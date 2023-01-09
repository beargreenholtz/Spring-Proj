import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { backendApi } from '../../../utils/http';
import type { IContactContent } from '../../../interfaces/responses';
import ContactView from './Contact.view';

interface IProps {}

const Contact: React.FC<IProps> = () => {
	const [contactContentState, setContactContentState] = useState<IContactContent | null>(null);

	useEffect(() => {
		backendApi
			.get('http://localhost:1337/api/contact?populate[0]=media')
			.then((response: AxiosResponse) => {
				setContactContentState(() => response.data.data);
			});
	}, [backendApi]);

	const onMapsNavigate = () => {
		window.open('https://goo.gl/maps/CqKs1YLBcp2QWJ3u6', '_blank');
	};

	const onSocialNavigate = (url: string) => {
		window.open(url, '_blank');
	};

	return (
		<ContactView
			contactContent={contactContentState}
			onMapsNavigate={onMapsNavigate}
			onSocialNavigate={onSocialNavigate}
		/>
	);
};

Contact.displayName = 'Contact';
Contact.defaultProps = {};

export default React.memo(Contact);
