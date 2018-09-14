import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import muiTheme from './muiTheme'
import { MuiThemeProvider } from '@material-ui/core/styles'
// import registerServiceWorker from './registerServiceWorker'
import App from './components/app'
import 'typeface-roboto'
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { getToken } from './utils/token'

// Specify the GrapQL URI and set headers on the operation context
const httpLink = new HttpLink({ uri: 'http://localhost:9000/grapql' })
const authLink = new ApolloLink((operation, forward) => {
  const token = getToken()
  operation.setContext({
    headers: {
      authorization: token
    }
  })

  // Call the next link in the middleware chain
  return forward(operation)
})

// Create an ApolloClient
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
})

// Render to the DOM
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
