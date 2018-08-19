import React from 'react'
import PropTypes from 'prop-types'
import {
  LoginStyled,
  LoginFormHolderStyled,
  LoginButtonHolderStyled,
  LoginInputHolderStyled
} from './login.styled'
import Card from '../card/card.styled'
import TextField from '@material-ui/core/TextField'
import { Typography, Button } from '@material-ui/core'

const Login = ({ onLogin, onInputChange, emailValue, passwordValue, msg }) => (
  <LoginStyled>
    <LoginFormHolderStyled>
      <Card>
        <form
          onSubmit={e => {
            e.preventDefault()
            onLogin()
          }}
        >
          <Typography variant="title" align="center">
            TapConnect
          </Typography>
          <LoginInputHolderStyled>
            <TextField
              fullWidth
              id="email"
              label="E-mail"
              value={emailValue}
              onChange={e => onInputChange(e.target.id, e.target.value)}
            />
            <TextField
              fullWidth
              id="password"
              type="password"
              label="Password"
              value={passwordValue}
              onChange={e => onInputChange(e.target.id, e.target.value)}
            />
          </LoginInputHolderStyled>
          {msg && <Typography color="error">{msg}</Typography>}
          <LoginButtonHolderStyled>
            <Button color="primary" variant="raised" fullWidth type="submit">
              Inloggen
            </Button>
          </LoginButtonHolderStyled>
        </form>
      </Card>
    </LoginFormHolderStyled>
  </LoginStyled>
)

export default Login

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  msg: PropTypes.string
}
