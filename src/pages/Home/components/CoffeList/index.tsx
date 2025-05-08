import { coffeeList } from '../../../../data';
import CoffeItem from '../CoffeItem';
import { CoffeListContainer, Container } from './styles';

const CoffeList = () => {
	return (
		<Container>
			<h2>Nossos Cafés</h2>

			<CoffeListContainer>
				{coffeeList.map((coffeItem) => (
					<CoffeItem key={coffeItem.id} {...coffeItem} />
				))}
			</CoffeListContainer>
		</Container>
	);
};

export default CoffeList;
