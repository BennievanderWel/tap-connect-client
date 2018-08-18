import React, { Component } from 'react'
import LoginContainer from './login/login.container'
import { AppStyled } from './app.styled'

class App extends Component {
  state = { loggedIn: false, currentUser: null }

  render() {
    return (
      <AppStyled>
        <LoginContainer />
      </AppStyled>
    )
  }
}

export default App
