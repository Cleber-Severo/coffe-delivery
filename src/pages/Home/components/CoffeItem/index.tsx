import { ICoffe } from '../../../../@types/coffe';
import CartButton from '../CartButton';
import { AmountActions, BuyContainer, ItemContainer, Price, Tags } from './styles';
import { Minus, Plus } from 'phosphor-react';

const CoffeItem = ({ title, description, url, price, tags }: ICoffe) => {
	const parseCurrency = (value: string): string | 0 =>
		isNaN(parseFloat(value))
			? 0
			: parseFloat(parseFloat(value).toFixed(2)).toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
			  });

	return (
		<ItemContainer>
			<img src={url} alt='' />

			{!!tags.length && (
				<Tags>
					{tags.map((tag, idx) => (
						<span key={idx}>{tag}</span>
					))}
				</Tags>
			)}

			<h4>{title}</h4>
			<p>{description}</p>

			<BuyContainer>
				<Price>
					<strong>{parseCurrency(price) || ''}</strong>
				</Price>
				<AmountActions>
					<button>
						<Minus size={18} />
					</button>
					<span>1</span>
					<button>
						<Plus size={18} />
					</button>
				</AmountActions>
				<CartButton onClick={() => {}} />
			</BuyContainer>
		</ItemContainer>
	);
};

export default CoffeItem;
