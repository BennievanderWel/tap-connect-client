import React, { Component } from 'react'
import { ChatsStyled, ChatListStyled } from './chats.styled'
import Card from '../card/card'
// import { emitMessage } from '../../utils/messageToaster'
import { Button } from '@material-ui/core'
import { Query } from 'react-apollo'
import { getChatsQuery } from '../../services/api/queries'
import Loader from '../../utils/components/loader'
import Text from '../../utils/components/text'
import Icon from '../../utils/icons'

class ChatsContainer extends Component {
  renderChats(chats) {
    if (chats.length === 0) {
      return (
        <Text fontStyle="italic" color="grey" text="Je hebt nog geen chats" />
      )
    }
  }

  render() {
    return (
      <Query query={getChatsQuery}>
        {({ loading, data }) => {
          return (
            <ChatsStyled>
              <Card fullHeight>
                <Button color="primary" variant="outlined" fullWidth>
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
    )
  }
}

export default ChatsContainer
