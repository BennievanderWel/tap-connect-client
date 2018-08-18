import { createMuiTheme } from '@material-ui/core/styles'
import theme from './theme'

export default createMuiTheme({
  palette: {
    primary: { main: theme.colors.red },
    secondary: { main: theme.colors.redwhite }
  }
})
