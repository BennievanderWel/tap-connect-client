import React, { Component } from 'react'
import { ChatsStyled, ChatListStyled } from './chats.styled'
import Card from '../card/card'
// import { emitMessage } from '../../utils/messageToaster'
import {
  Button,
  DialogContent,
  TextField,
  Typography,
  DialogActions
} from '@material-ui/core'
import { Query } from 'react-apollo'
import { getChatsQuery } from '../../services/api/queries'
import Loader from '../../utils/components/loader'
import Text from '../../utils/components/text'
import Icon from '../../utils/icons'
import FormDialog from '../../utils/components/dialog'

class ChatsContainer extends Component {
  constructor() {
    super()

    this.state = { showAddDialog: true, submittingAddDialog: false }

    this.toggleAddDialog = this.toggleAddDialog.bind(this)
  }

  toggleAddDialog() {
    this.setState(prevProps => ({ showAddDialog: !prevProps.showAddDialog }))
  }

  renderChats(chats) {
    if (chats.length === 0) {
      return (
        <Text fontStyle="italic" color="grey" text="Je hebt nog geen chats" />
      )
    }
  }

  render() {
    const { showAddDialog, submittingAddDialog } = this.state

    return (
      <React.Fragment>
        <FormDialog
          title="Voeg een nieuwe chat toe"
          open={showAddDialog}
          onClose={this.toggleAddDialog}
          submitting={submittingAddDialog}
        >
          <DialogContent>
            <Typography>
              Vul het e-mail adres in van de gebuiker waar je een chat mee wilt
              starten
            </Typography>
            <TextField fullWidth label="E-mail adres" />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleAddDialog}>Annuleer</Button>
            <Button variant="raised" color="primary">
              Voeg toe
            </Button>
          </DialogActions>
        </FormDialog>

        <Query query={getChatsQuery}>
          {({ loading, data }) => {
            return (
              <ChatsStyled>
                <Card fullHeight>
                  <Button
                    color="primary"
                    variant="outlined"
                    fullWidth
                    onClick={this.toggleAddDialog}
                  >
                    <Icon icon="add" />
                    Nieuwe chat
                  </Button>
                  <ChatListStyled>
                    {loading && <Loader />}
                    {!loading && this.renderChats(data.getChats)}
                  </ChatListStyled>
                </Card>
              </ChatsStyled>
            )
          }}
        </Query>
      </React.Fragment>
    )
  }
}

export default ChatsContainer
