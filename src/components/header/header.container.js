import React, { Component } from 'react'
import { HeaderStyled } from './header.styled'
import { Typography } from '@material-ui/core'

class HeaderContainer extends Component {
  render() {
    return (
      <HeaderStyled>
        <Typography variant="title">TapConnect</Typography>
      </HeaderStyled>
    )
  }
}

export default HeaderContainer
