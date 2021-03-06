import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.main};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 4px 12px;
`
