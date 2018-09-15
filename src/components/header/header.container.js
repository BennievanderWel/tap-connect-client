import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import { AppContext } from '../../context'
import { emitMessage } from '../../utils/messageToaster'
import { withApollo } from 'react-apollo'
import { getUserQuery } from '../../services/api/queries'

class HeaderContainer extends Component {
  static propTypes = {
    client: PropTypes.object // Provided by Apollo
  }

  componentDidMount() {
    this.welcomeTheLoggedInUser()
  }

  /**
   * Welcome the user with a nice message
   */
  welcomeTheLoggedInUser() {
    const user = this.props.client.readQuery({ query: getUserQuery }).getUser
    emitMessage(`Welcome ${user.username}`)
  }

  render() {
    return (
      <AppContext.Consumer>
        {({ logout }) => <Header onLogout={logout} />}
      </AppContext.Consumer>
    )
  }
}

export default withApollo(HeaderContainer)
