import React, { Component } from 'react'
import {
  LoginStyled,
  LoginFormHolderStyled,
  LoginButtonHolderStyled
} from './login.styled'
import Card from '../card/card.styled'
import TextField from '@material-ui/core/TextField'
import { Typography, Button } from '@material-ui/core'

class Login extends Component {
  render() {
    return (
      <LoginStyled>
        <LoginFormHolderStyled>
          <Card>
            <Typography variant="title">TapConnect</Typography>
            <TextField fullWidth id="email" label="Email" />
            <TextField
              fullWidth
              id="password"
              type="password"
              label="password"
            />
            <LoginButtonHolderStyled>
              <Button color="primary" variant="raised" fullWidth>
                Inloggen
              </Button>
            </LoginButtonHolderStyled>
          </Card>
        </LoginFormHolderStyled>
      </LoginStyled>
    )
  }
}

export default Login
