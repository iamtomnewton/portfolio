import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './themes'
import { Button } from './components/button/button'
import { Typography } from './components/typography/typography'

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.colors.main};
  margin: 0 auto;
  max-width: 900px;
`

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Wrapper className='App'>
        <Typography as='h2'>iamtomnewton</Typography>
        <Button label={'test'} />
      </Wrapper>
    </ThemeProvider>
  )
}
