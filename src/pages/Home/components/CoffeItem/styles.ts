import styled from 'styled-components';

export const ItemContainer = styled.div`
	background-color: ${(props) => props.theme['base-card']};

	display: flex;
	flex-direction: column;
	align-items: center;

	border-radius: 0 50px 0 50px;

	text-align: center;

	padding: 20px;
	width: 256px;

	img {
		width: 120px;
		height: 120px;

		transform: translateY(-38%);
		margin-bottom: -36px;
	}

	h4 {
		color: ${(props) => props.theme['base-subtitle']};

		font-size: 20px;
		line-height: 130%;
		font-weight: bold;

		margin-bottom: 8px;
	}

	p {
		color: ${(props) => props.theme['base-label']};

		font-size: 14px;
		line-height: 130%;
		font-weight: 400;

		margin-bottom: 33px;
	}
`;

export const Tags = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;

	margin-bottom: 16px;

	span {
		background-color: ${(props) => props.theme['yellow-light']};
		color: ${(props) => props.theme['yellow-dark']};

		border-radius: 20px;

		text-transform: uppercase;

		font-size: 10px;
		line-height: 130%;
		font-weight: bold;

		padding: 4px 8px;
	}
`;

export const BuyContainer = styled.div`
	display: flex;
	align-items: center;

	margin-top: auto;
`;

export const Price = styled.span`
	color: ${(props) => props.theme['base-text']};

	font-size: 20px;
	line-height: 130%;
	font-weight: bolder;

	margin-right: 18px;
`;

export const AmountActions = styled.div`
	background-color: ${(props) => props.theme['base-button']};

	display: flex;
	align-items: center;
	gap: 10px;

	border-radius: 4px;
	border: none;

	margin-right: 8px;
	padding: 8px;

	span {
		color: ${(props) => props.theme['base-title']};

		font-size: 16px;
		line-height: 130%;
		font-weight: bold;
	}

	button {
		border: none;
		padding: 2;
		cursor: pointer;
		background-color: transparent;

		&:hover {
			background-color: transparent;
		}
	}

	svg {
		border: none;
		color: ${(props) => props.theme['purple']};

		&:hover {
			cursor: pointer;
			color: ${(props) => props.theme['purple-dark']};
		}
	}
`;
