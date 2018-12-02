import React, { Component } from 'react'
import AddChatDialog from '../chat-list/dialogs/addChat'
import emitMessage from '../messageToaster/MessageToaster'
import Sidebar from './sidebar'

class SidebarContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { showAddDialog: false, submittingAddDialog: false }

    this.toggleAddDialog = this.toggleAddDialog.bind(this)
    this.addChat = this.addChat.bind(this)
  }

  /**
   * Toggle the dialog to add a new chat
   */
  toggleAddDialog() {
    this.setState(prevProps => ({ showAddDialog: !prevProps.showAddDialog }))
  }

  /**
   * TBD
   */
  addChat() {
    this.setState(() => ({ showAddDialog: false }))
    emitMessage('Nieuwe chat succesvol aangemaakt')
  }

  render() {
    const { showAddDialog, submittingAddDialog } = this.state

    return (
      <React.Fragment>
        <AddChatDialog
          open={showAddDialog}
          submitting={submittingAddDialog}
          onClose={this.toggleAddDialog}
          onSave={this.addChat}
        />
        <Sidebar toggleAddDialog={this.toggleAddDialog} />
      </React.Fragment>
    )
  }
}

export default SidebarContainer
