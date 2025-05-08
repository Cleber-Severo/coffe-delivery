import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import heroImg from '../../../../assets/Imagem.png';
import { defaultTheme } from '../../../../styles/themes/default';
import { BannerInfo, Container, IconList, ListItem, Wrapper } from './styles';
import { ReactNode } from 'react';

interface InfoItemProps {
	icon: ReactNode;
	bgColor: string;
	text: string;
}

export const InfoItem = ({ icon, bgColor, text }: InfoItemProps) => (
	<ListItem>
		<span style={{ backgroundColor: bgColor }}>{icon}</span>
		<p>{text}</p>
	</ListItem>
);

const Hero = () => {
	return (
		<Wrapper>
			<Container>
				<BannerInfo>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
					<IconList>
						<InfoItem
							icon={<ShoppingCart size={22} weight='fill' color='#FFF' />}
							bgColor={defaultTheme['yellow-dark']}
							text='Compra simples e segura'
						/>
						<InfoItem
							icon={<Package size={22} weight='fill' color='#FFF' />}
							bgColor={defaultTheme['base-text']}
							text='Embalagem mantém o café intacto'
						/>
						<InfoItem
							icon={<Timer size={22} weight='fill' color='#FFF' />}
							bgColor={defaultTheme['yellow']}
							text='Entrega rápida e rastreada'
						/>
						<InfoItem
							icon={<Coffee size={22} weight='fill' color='#FFF' />}
							bgColor={defaultTheme['purple']}
							text='O café chega fresquinho até você'
						/>
					</IconList>
				</BannerInfo>
				<img src={heroImg} alt='Hero image a coffe with a yellow bg' />
			</Container>
		</Wrapper>
	);
};

export default Hero;
