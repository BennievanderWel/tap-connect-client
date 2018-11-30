import React, { Component } from 'react'
import HeaderContainer from '../header/header.container'
import { DashboardStyled, DashboardContentStyled } from './dashboard.styled'
import Sidebar from '../sidebar/sidebar.container';

class DashboardContainer extends Component {
  render() {
    return (
      <DashboardStyled>
        <HeaderContainer />
        <DashboardContentStyled>
          <Sidebar />
        </DashboardContentStyled>
      </DashboardStyled>
    )
  }
}

export default DashboardContainer
