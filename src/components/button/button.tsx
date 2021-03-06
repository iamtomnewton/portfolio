import React from 'react'
import * as Styled from './button.styles'

interface buttonProps {
  label: string
}

export const Button = ({ label }: buttonProps) => {
  return <Styled.Button>{label}</Styled.Button>
}
