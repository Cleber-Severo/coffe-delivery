import Header from '../../components/Header/indext';
import { Outlet } from 'react-router-dom';
import { Container } from './styles';

const DefaultLayout = () => {
	return (
		<Container>
			<Header />
			<Outlet />
		</Container>
	);
};

export default DefaultLayout;
