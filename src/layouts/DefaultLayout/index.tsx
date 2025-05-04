import React from 'react';
import Header from '../../components/Header/indext';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

export default DefaultLayout;
