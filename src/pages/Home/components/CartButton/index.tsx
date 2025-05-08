import { ShoppingCart } from 'phosphor-react';
import { defaultTheme } from '../../../../styles/themes/default';
import { CartBadge } from './styles';

interface CartButtonProps {
	onClick: () => void;
}

const CartButton = ({ onClick }: CartButtonProps) => {
	return (
		<CartBadge onClick={onClick}>
			<ShoppingCart size={22} weight='fill' color={defaultTheme['white']} />
		</CartBadge>
	);
};

export default CartButton;
