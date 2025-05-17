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

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  flex: 1;
`

export const SelectedCoffeContainer = styled.div`
  width: 448px;
`


export const FormLayout = styled.div`
  display: flex;
  gap: 12px;
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 12px;
`
type InputWrapperProps = {
  colSpan: number
}

export const InputWrapper = styled.div<InputWrapperProps>`
  grid-column: span ${({ colSpan }) => colSpan};
`

export const Input = styled.input`
  background-color: ${({ theme }) => theme["base-input"]};
  color: ${({ theme }) => theme["base-label"]};
  border: 1px solid ${({ theme }) => theme["base-hover"]};
  border-radius: 4px;

  padding: 12px;
  margin-bottom: 12px;

  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme["base-label"]};
    font-size: 14px;
    line-height: 130%;
    font-weight: 400;
  }
`