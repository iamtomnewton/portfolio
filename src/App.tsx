import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './themes'
import { Button } from './components/button/button'

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.colors.main};
  margin: 0 auto;
  max-width: 900px;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
`

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Wrapper className='App'>
        <Title className='App-header'>iamtomnewton</Title>
        <Button label={'test'} />
      </Wrapper>
    </ThemeProvider>
  )
}
