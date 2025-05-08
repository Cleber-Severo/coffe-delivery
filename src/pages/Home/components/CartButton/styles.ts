import styled from 'styled-components';

export const CartBadge = styled.button`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme['purple']};
	padding: 8px;

	border-radius: 4px;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme['purple-dark']};
	}
`;
