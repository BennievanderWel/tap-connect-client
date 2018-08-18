import React, { Component } from 'react'
import { LoginStyled, LoginFormHolderStyled } from './login.styled'
import Card from '../card/card.styled'
import TextField from '@material-ui/core/TextField'

class Login extends Component {
  render() {
    return (
      <LoginStyled>
        <LoginFormHolderStyled>
          <Card>
            <TextField fullWidth id="email" label="Email" />
            <TextField
              fullWidth
              id="password"
              type="password"
              label="password"
            />
          </Card>
        </LoginFormHolderStyled>
      </LoginStyled>
    )
  }
}

export default Login
