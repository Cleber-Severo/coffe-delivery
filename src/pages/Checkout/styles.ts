import styled from "styled-components";

export const FormContainer = styled.form`
	display: flex;
  align-items: flex-start;
  gap: 32px;

	padding: 20px 160px;
	width: 1440px;
	margin: 0 auto;

`;

export const CardTitle = styled.h4`
  color: ${({ theme }) => theme["base-subtitle"]};

  font-family: 'Baloo 2', sans-serif;

  font-size: 18px;
  line-height: 130%;
  font-weight: bold;
`

type CardProps = {
  roundedCorner?: boolean
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: ${({ roundedCorner = false }) => roundedCorner ? '6px 40px 6px 40px' : '6px'};

  padding: 40px;
`

