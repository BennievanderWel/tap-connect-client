import React, { Component } from 'react'
import HeaderContainer from '../header/header.container'
import { DashboardStyled, DashboardContentStyled } from './dashboard.styled'
import Sidebar from '../sidebar/sidebar.container'
import Chat from '../chat/chat'
import EmptyView from './empty-view'
import { DashboardContext } from '../../context'

class DashboardContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { currentChatId: '5bc6f44a0cb4992c08e6378a' }
    console.warn('Hard coded chat id!')

    this.setChatId = this.setChatId.bind(this)
  }

  /**
   * Set the chat id
   */
  setChatId(chatId) {
    this.setState({ currentChatId: chatId })
  }

  render() {
    return (
      <DashboardContext.Provider
        value={{
          setChatId: this.setChatId,
          currentChatId: this.state.currentChatId,
        }}
      >
        <DashboardStyled>
          <HeaderContainer />
          <DashboardContentStyled>
            <Sidebar />
            {this.state.currentChatId ? <Chat /> : <EmptyView />}
          </DashboardContentStyled>
        </DashboardStyled>
      </DashboardContext.Provider>
    )
  }
}

export default DashboardContainer
