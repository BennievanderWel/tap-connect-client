import styled from 'styled-components'
import { LinearProgress } from '@material-ui/core'

export const CardStyled = styled.div`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: ${props => props.theme.colors.offwhite};
  border-radius: 4px;
  ${props => (props.fullHeight ? 'height: 100%' : '')};
  ${props => (props.fullWidth ? 'width: 100%' : '')};
`

export const CardContentStyled = styled.div`
  padding: ${({ noPadding }) => (noPadding ? '0px' : '12px')};
`

export const SubmittingIndicatorStyled = styled(LinearProgress)`
  && {
    border-radius: 0 0 4px 4px;
  }
`

export const SubmittingIndicatorPlaceholderStyled = styled.div`
  background-color: ${props => props.theme.colors.lightred};
  height: 5px;
  width: 100%;
`
