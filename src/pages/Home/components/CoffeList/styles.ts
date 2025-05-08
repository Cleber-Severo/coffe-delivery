import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	padding: 100px 160px;
	width: 1440px;
	margin: auto;

	h2 {
		font-family: 'Baloo 2', sans-serif;

		font-size: 32px;
		line-height: 130%;
		font-weight: bolder;

		color: ${(props) => props.theme['base-subtitle']};

		margin-bottom: 50px;
	}
`;

export const CoffeListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 42px 32px;
`;
