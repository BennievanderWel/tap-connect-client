import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import registerServiceWorker from './registerServiceWorker'
import App from './components/app'
import 'typeface-roboto'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
