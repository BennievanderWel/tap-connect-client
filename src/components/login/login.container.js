import React, { Component } from 'react'
import Login from './login'
import axios from 'axios'
import { saveToken } from '../../utils/token'
import PropTypes from 'prop-types'
import { CircularProgress } from '@material-ui/core'

class LoginContainer extends Component {
  constructor() {
    super()
    this.state = { email: '', password: '', errorMsg: '', loading: true }
  }

  componentDidMount() {
    axios
      .get('/auth/user')
      .then(res => {
        this.props.setUser(res.data)
      })
      .catch(() => {
        this.setState(() => ({ loading: false }))
      })
  }

  handleLogin() {
    const { email, password } = this.state

    axios
      .post('auth/login', { email, password })
      .then(res => {
        saveToken(res.data.token)
        axios.get('auth/user').then(res => this.props.setUser(res.data))
      })
      .catch(err => this.setState(() => ({ errorMsg: err.response.data.msg })))
  }

  handleInputChange(name, value) {
    this.setState(() => ({ [name]: value }))
  }

  render() {
    const { email, password, errorMsg, loading } = this.state

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
          />
        )}
      </React.Fragment>
    )
  }
}

export default LoginContainer

LoginContainer.propTypes = {
  setUser: PropTypes.func.isRequired
}
