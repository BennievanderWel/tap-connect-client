import React, { Component } from 'react'
import LoginContainer from './login/login.container'
import { AppStyled } from './app.styled'

class App extends Component {
  render() {
    return (
      <AppStyled>
        <LoginContainer />
      </AppStyled>
    )
  }
}

export default App
