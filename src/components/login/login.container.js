import React, { Component } from 'react'
import Login from './login'
import axios from 'axios'
import { saveToken } from '../../utils/token'
import PropTypes from 'prop-types'
import { CircularProgress } from '@material-ui/core'
import { withApollo } from 'react-apollo'
import { getUserQuery } from 'services/api/queries'

class LoginContainer extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errorMsg: '',
      loading: true,
      disableForm: false
    }
  }

  componentDidMount() {
    this.props.client
      .query({
        query: getUserQuery
      })
      .then(() => {
        this.props.login()
      })
      .catch(() => this.setState(() => ({ loading: false })))
  }

  /**
   * Login by sending credentials to the server
   */
  handleLogin() {
    const { email, password } = this.state

    // Disable form and login on callback of setState
    this.setState(
      () => ({ disableForm: true }),
      () => {
        // Call login endpoint, receive token, save token, call login prop
        axios
          .post('auth/login', { email, password })
          .then(res => {
            saveToken(res.data.token)
            this.props.client
              .query({
                query: getUserQuery
              })
              .then(() => this.props.login())
              .catch(() => this.setState(() => ({ loading: false })))
          })
          .catch(err =>
            this.setState(() => ({
              errorMsg: err.response.data.msg,
              disableForm: false
            }))
          )
      }
    )
  }

  handleInputChange(name, value) {
    this.setState(() => ({ [name]: value }))
  }

  render() {
    const { email, password, errorMsg, loading, disableForm } = this.state

    return (
      <React.Fragment>
        {loading && <CircularProgress />}
        {!loading && (
          <Login
            onLogin={this.handleLogin.bind(this)}
            onInputChange={this.handleInputChange.bind(this)}
            emailValue={email}
            passwordValue={password}
            msg={errorMsg}
            disable={disableForm}
          />
        )}
      </React.Fragment>
    )
  }
}

export default withApollo(LoginContainer)

LoginContainer.propTypes = {
  client: PropTypes.object, // Provied by withApollo
  login: PropTypes.func.isRequired
}
