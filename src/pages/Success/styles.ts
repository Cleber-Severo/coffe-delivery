import styled from "styled-components";

export const Container = styled.div`
	display: flex;
  align-items: flex-end;
  justify-content: space-between;

	padding: 80px 160px;
	width: 1440px;
	margin: 0 auto;

  img {
    margin-bottom: -0.6rem;
  }
`;



export const Title = styled.h1`
  color: ${({ theme }) => theme['yellow-dark']};
  
  font-size: 32px;
  font-weight: bolder;
  margin-bottom: 4px;
  `


export const SubTitle = styled.h1`
  color: ${({ theme }) => theme['base-subtitle']};
  
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 40px;
  `
export const Card = styled.div`
    padding: 1px;

    border-radius: 6px 40px 6px 40px;
    background: linear-gradient(90deg, ${({ theme }) => theme.yellow}, ${({ theme }) => theme.purple});
  
    > div {
      background: #fafafa; 
      border-radius: 6px 40px 6px 40px;
      padding: 40px;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  `;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div:last-child {
    display: flex;
    flex-direction: column;
  }

  div span {
    color: ${({theme}) => theme["base-text"]};
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  width: 32px;
  height: 32px;
`