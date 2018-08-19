import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import muiTheme from './muiTheme'
import { MuiThemeProvider } from '@material-ui/core/styles'
// import registerServiceWorker from './registerServiceWorker'
import App from './components/app'
import 'typeface-roboto'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'localhost:9000/grapql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
// registerServiceWorker()
