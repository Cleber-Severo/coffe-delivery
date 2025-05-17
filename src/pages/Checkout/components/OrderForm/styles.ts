import styled from "styled-components"

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  flex: 1;
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
  margin-bottom: 1rem;
`

export const Input = styled.input<{ hasError?: boolean }>`
  background-color: ${({ theme }) => theme["base-input"]};
  color: ${({ theme }) => theme["base-label"]};
  border: 1px solid
    ${({ theme, hasError }) => (hasError ? 'red' : theme["base-hover"])};
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

  &:focus {
    border-color: ${({ hasError, theme }) =>
      hasError ? 'red' : theme["yellow-dark"]};
    outline: none;
  }
`

export const ErrorText = styled.span`
  color: red;
  font-size: 0.75rem;
  margin-top: 4px;
  display: block;
`