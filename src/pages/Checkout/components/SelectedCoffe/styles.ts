import styled from "styled-components";

export const SelectedCoffeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 448px;
`

export const CoffeItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  
  img {
    width: 64px;
    height: 64px;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`
export const ItemDescription = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  `


export const BaseBtnContainer = styled.div`
  background-color: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  border: none;

  padding: 6px;
`

export const AmountActionsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

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
		color: ${(props) => props.theme['purple-dark']};

		&:hover {
			cursor: pointer;
			color: ${(props) => props.theme['purple']};
		}
	}
`

export const RemoveBtn = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme['base-title']};
	font-size: 16px;
  
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Separator = styled.hr`
  border: none;
  height: 1px;
  background-color: ${(props) => props.theme['base-button']};
  margin: 12px 0;
`