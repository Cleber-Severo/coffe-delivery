import styled from 'styled-components';
interface HeaderContainerProps {
	$scrolled: boolean;
}

export const Wrapper = styled.div<HeaderContainerProps>`
	position: sticky;
	top: 0;
	z-index: 10;
	display: flex;
	/* justify-content: center; */
	background-color: ${({ $scrolled }) => ($scrolled ? 'white' : 'transparent')};
	box-shadow: ${({ $scrolled }) => ($scrolled ? '0 2px 8px rgba(0, 0, 0, 0.05)' : 'none')};
`;

export const HeaderContainer = styled.div<HeaderContainerProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 1440px;
	margin: auto;
	padding: ${({ $scrolled }) => ($scrolled ? '24px 160px' : '32px 160px')};
	transition: 0.3s ease;
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
