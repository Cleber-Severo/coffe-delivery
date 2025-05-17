import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 12px;
`

type PaymentBtnProps = {
  selected?: boolean
}

export const PaymentBtn = styled.button<PaymentBtnProps>`
  background-color: ${({theme, selected}) => selected ? theme['purple-light'] :theme["base-button"]};
  color: ${({theme}) => theme["base-text"]};

  display: flex;
  align-items: center;
  flex: 1;
  gap: 6px;
  
  border-radius: 6px;
  border: 1px solid transparent;
  border-color: ${({theme, selected}) => selected ? theme.purple : 'transparent'};
  
  padding: 16px;

  svg {
    color: ${({theme}) => theme["purple"]};
  }

  span {
    color: ${({theme}) => theme["base-text"]};

    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 160%;
  }
`