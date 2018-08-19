import React, { Component } from 'react'
import LoginContainer from './login/login.container'
import { AppStyled } from './app.styled'
import DashboardContainer from './dashboard/dashboard.container'

class App extends Component {
  state = { loggedIn: false, currentUser: null, loading: true }

  setUser(user) {
    this.setState(() => ({ currentUser: user, loggedIn: true }))
  }

  render() {
    const { loggedIn } = this.state

    return (
      <AppStyled>
        {!loggedIn && <LoginContainer setUser={this.setUser.bind(this)} />}
        {loggedIn && <DashboardContainer />}
      </AppStyled>
    )
  }
}

export default App
