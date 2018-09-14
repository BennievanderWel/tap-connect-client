import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginContainer from './login/login.container'
import { AppStyled } from './app.styled'
import DashboardContainer from './dashboard/dashboard.container'
import { removeToken } from '../utils/token'
import { AppContext } from '../context'
import { withApollo } from 'react-apollo'

class App extends Component {
  constructor() {
    super()
    this.state = { loggedIn: false }

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  /**
   * Set the app state to logged in
   */
  login() {
    this.setState(() => ({ loggedIn: true }))
  }

  /**
   * Set the app state to logged out
   */
  logout() {
    //  Remove the auth token
    removeToken()
    // Clear the Apollo store
    this.props.client.resetStore()
    // Change the loggedIn state
    this.setState(() => ({ loggedIn: false }))
  }

  render() {
    const { loggedIn } = this.state
    return (
      <AppContext.Provider
        value={{
          logout: this.logout,
          login: this.login
        }}
      >
        <AppStyled>
          {!loggedIn && <LoginContainer login={this.login} />}
          {loggedIn && <DashboardContainer />}
        </AppStyled>
      </AppContext.Provider>
    )
  }
}

export default withApollo(App)

App.propTypes = {
  client: PropTypes.object
}
