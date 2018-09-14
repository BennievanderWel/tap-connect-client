import React, { Component } from 'react'
import Header from './header'
import { AppContext } from '../../context'

class HeaderContainer extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ logout }) => <Header onLogout={logout} />}
      </AppContext.Consumer>
    )
  }
}

export default HeaderContainer
