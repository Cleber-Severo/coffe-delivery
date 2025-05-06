import { CartBadge, HeaderActions, HeaderContainer, Location } from './styles';
import Logo from '../../assets/logo.png';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';

const Header = () => {
	return (
		<HeaderContainer>
			<img src={Logo} alt='main logo' />
			<HeaderActions>
				<Location>
					<MapPin size={28} weight='fill' color={defaultTheme.purple} />
					<span>Porto Alegre, RS</span>
				</Location>
				<CartBadge>
					<ShoppingCart size={28} weight='fill' color={defaultTheme['yellow']} />
					<span>3</span>
				</CartBadge>
			</HeaderActions>
		</HeaderContainer>
	);
};

export default Header;
