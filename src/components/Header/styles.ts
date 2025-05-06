import styled from 'styled-components';

export const HeaderContainer = styled.div`
	padding: 32px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderActions = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

export const Location = styled.div`
	display: flex;
	align-items: center;
	gap: 3px;
	padding: 8px;

	background-color: ${(props) => props.theme['purple-light']};
	border-radius: 4px;

	span {
		color: ${(props) => props.theme['purple']};
	}
`;

export const CartBadge = styled.button`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme['yellow-light']};
	padding: 8px;

	border-radius: 4px;
	border: none;
	position: relative;

	span {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;

		font-weight: bold;
		font-size: 14px;

		border-radius: 100%;

		position: absolute;
		top: -12px;
		right: -12px;

		background-color: ${(props) => props.theme['yellow-dark']};
		color: white;
	}
`;
