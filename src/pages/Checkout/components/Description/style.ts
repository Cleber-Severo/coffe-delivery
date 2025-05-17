import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 8px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  h3 {
    font-size: 16px;
    line-height: 130%;
    font-weight: 400;

    color: ${({theme}) => theme["base-subtitle"]};
  }
  p {
    font-size: 14px;
    line-height: 130%;
    font-weight: 400;

    color: ${({theme}) => theme["base-text"]};
  }
`
