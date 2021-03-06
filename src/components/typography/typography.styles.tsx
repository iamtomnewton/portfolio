import styled from 'styled-components'
import { typographyProps } from './typography'

export const Typography = styled.p<typographyProps>`
  color: ${({ as, theme }) => as !== undefined && theme.type[as].color};
  font-size: ${({ as, theme }) => as !== undefined && theme.type[as].size};
`
