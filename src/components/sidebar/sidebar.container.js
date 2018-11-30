import React, { Component } from 'react'
import Card from '../card/card'
import { SidebarStyled, SideBarBtnSectionStyled } from './sidebar.styled'
import { Button } from '@material-ui/core'
import Icon from '../../utils/icons'
import AddChatDialog from '../chat-list/dialogs/addChat'
import emitMessage from '../messageToaster/MessageToaster'
import ChatListContainer from '../chat-list/chat-list.container';

class Sidebar extends Component {
  constructor() {
    super()

    this.state = { showAddDialog: false, submittingAddDialog: false }

    this.toggleAddDialog = this.toggleAddDialog.bind(this)
    this.addChat = this.addChat.bind(this)
  }

  toggleAddDialog() {
    this.setState(prevProps => ({ showAddDialog: !prevProps.showAddDialog }))
  }

  addChat() {
    this.setState(() => ({ showAddDialog: false }))
    emitMessage('Nieuwe chat succesvol aangemaakt')
  }

  render() {
    const { showAddDialog, submittingAddDialog } = this.state

    return (
      <SidebarStyled>
        <AddChatDialog
          open={showAddDialog}
          submitting={submittingAddDialog}
          onClose={this.toggleAddDialog}
          onSave={this.addChat}
        />
        <Card fullHeight noPadding>
          <SideBarBtnSectionStyled>
            <Button
              color="primary"
              variant="outlined"
              fullWidth
              onClick={this.toggleAddDialog}
            >
              <Icon icon="addUser" />
              Nieuwe chat
          </Button>
          </SideBarBtnSectionStyled>
          <ChatListContainer />
        </Card>
      </SidebarStyled>
    )
  }
}

export default Sidebar