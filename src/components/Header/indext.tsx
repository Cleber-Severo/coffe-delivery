import { CartBadge, HeaderActions, HeaderContainer, Location, Wrapper } from './styles';
import Logo from '../../assets/logo.png';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';
import { useEffect, useState } from 'react';

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<Wrapper $scrolled={scrolled}>
			<HeaderContainer $scrolled={scrolled}>
				<img src={Logo} alt='main logo' />
				<HeaderActions>
					<Location>
						<MapPin size={28} weight='fill' color={defaultTheme.purple} />
						<span>Porto Alegre, RS</span>
					</Location>
					<CartBadge>
						<ShoppingCart size={28} weight='fill' color={defaultTheme['yellow-dark']} />
						<span>3</span>
					</CartBadge>
				</HeaderActions>
			</HeaderContainer>
		</Wrapper>
	);
};

export default Header;
