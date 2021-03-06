import styled from 'styled-components'
import { typographyProps } from './typography'

export const Typography = styled.p<typographyProps>`
  color: ${({ theme, as }) => theme.type[as].color};
  font-size: ${({ theme, as }) => theme.type[as].size};
`
