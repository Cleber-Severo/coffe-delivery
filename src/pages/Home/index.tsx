import { useEffect } from 'react';
import CoffeList from './components/CoffeList';
import Hero from './components/Hero';

const Home = () => {
	useEffect(() => {
		document.title = 'Coffe Delivery - Home';
	}, []);

	return (
		<div>
			<Hero />
			<CoffeList />
		</div>
	);
};

export default Home;
