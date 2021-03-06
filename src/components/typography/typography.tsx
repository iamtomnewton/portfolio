import React from 'react'
import * as Styled from './typography.styles'

export interface typographyProps {
  children: React.ReactNode
  as: 'h1' | 'h2'
}

export const Typography = ({ children, as }: typographyProps) => {
  return <Styled.Typography as={as}>{children}</Styled.Typography>
}
