import styled from 'styled-components';
import bg from '../../../assets/hero_bg.png';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;

	background: url(${bg}) no-repeat center center;
	background-size: cover;
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;

	padding: 100px 160px;
	width: 1440px;

	img {
		width: 446px;
	}
`;

export const BannerInfo = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 588px;

	h1 {
		font-family: 'Baloo 2', sans-serif;

		font-size: 48px;
		line-height: 130%;
		font-weight: bolder;

		color: ${(props) => props.theme['base-title']};

		margin-bottom: 14px;
	}

	p {
		font-size: 20px;
		line-height: 130%;
		font-weight: 400;

		color: ${(props) => props.theme['base-text']};
	}
`;

export const IconList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 22px;
	margin-top: 65px;
`;

export const ListItem = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;

	span {
		display: flex;
		align-items: center;

		border-radius: 50%;
		padding: 8px;
	}

	p {
		color: ${(props) => props.theme['base-text']};

		font-size: 16px;
		line-height: 130%;
		font-weight: 400;
	}
`;
