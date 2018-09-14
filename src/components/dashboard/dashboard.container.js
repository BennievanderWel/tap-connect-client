import React, { Component } from 'react'
import HeaderContainer from '../header/header.container'
import { DashboardStyled, DashboardContentStyled } from './dashboard.styled'
import ChatsContainer from '../chats/chats.container'

class DashboardContainer extends Component {
  render() {
    return (
      <DashboardStyled>
        <HeaderContainer />
        <DashboardContentStyled>
          <ChatsContainer />
        </DashboardContentStyled>
      </DashboardStyled>
    )
  }
}

export default DashboardContainer
