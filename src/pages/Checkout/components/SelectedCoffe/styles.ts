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

export const ListWrapper = styled.div`
  max-height: 400px;
  overflow-y: auto;

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

export const ResumeTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ResumeText = styled.span`
  color: ${(props) => props.theme['base-text']};
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 400;
`

export const ResumeTitle = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: bold;
  `

export const ConfirmOrderButton = styled.button`
  color: ${(props) => props.theme['white']};
  background-color: ${(props) => props.theme['yellow']};

  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  flex: 1;
  
  padding: 12px;

  font-size: 14px;
  line-height: 160%;
  font-weight: bold;
`