import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import heroImg from '../../../assets/Imagem.png';
import { defaultTheme } from '../../../styles/themes/default';
import { BannerInfo, Container, IconList, ListItem, Wrapper } from './styles';

const Hero = () => {
	return (
		<Wrapper>
			<Container>
				<BannerInfo>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
					<IconList>
						<ListItem>
							<span style={{ backgroundColor: defaultTheme['yellow-dark'] }}>
								<ShoppingCart size={22} weight='fill' color={'#FFF'} />
							</span>
							<p>Compra simples e segura</p>
						</ListItem>

						<ListItem>
							<span style={{ backgroundColor: defaultTheme['base-text'] }}>
								<Package size={22} weight='fill' color={'#FFF'} />
							</span>
							<p>Embalagem mantém o café intacto</p>
						</ListItem>

						<ListItem>
							<span style={{ backgroundColor: defaultTheme['yellow'] }}>
								<Timer size={22} weight='fill' color={'#FFF'} />
							</span>
							<p>Entrega rápida e rastreada</p>
						</ListItem>
						<ListItem>
							<span style={{ backgroundColor: defaultTheme['purple'] }}>
								<Coffee size={22} weight='fill' color={'#FFF'} />
							</span>
							<p>O café chega fresquinho até você</p>
						</ListItem>
					</IconList>
				</BannerInfo>
				<img src={heroImg} alt='Hero image a coffe with a yellow bg' />
			</Container>
		</Wrapper>
	);
};

export default Hero;
