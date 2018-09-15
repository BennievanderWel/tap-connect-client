import styled from 'styled-components'
import { Snackbar } from '@material-ui/core'

export const MessageToasterStyled = styled(Snackbar)`
  && div {
    background-color: ${props => props.theme.colors.red};
  }
`
