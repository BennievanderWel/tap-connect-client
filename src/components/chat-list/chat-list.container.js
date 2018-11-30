import React, { Component } from 'react'
import { ChatListStyled } from './chat-list.styled'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { Query } from 'react-apollo'
import { getChatsQuery } from '../../services/api/queries'
import Loader from '../../utils/components/loader'
import Text from '../../utils/components/text'
import Icon from '../../utils/icons'

class ChatListContainer extends Component {

  renderChats(chats) {
    if (chats.length === 0) {
      return (
        <Text fontStyle="italic" color="grey" text="Je hebt nog geen chats" />
      )
    } else {
      return (
        <List>
          {chats.map(chat => (
            <ListItem key={chat._id} button>
              <ListItemIcon>
                <Icon icon="user" />
              </ListItemIcon>
              <ListItemText primary={chat.users[0].username} />
            </ListItem>
          ))}
        </List>
      )
    }
  }


  render() {

    return (
      <Query query={getChatsQuery}>
        {({ loading, data }) => {
          return (
            <ChatListStyled>
              {loading && <Loader />}
              {!loading && this.renderChats(data.getChats)}
            </ChatListStyled>
          )
        }}
      </Query>
    )
  }
}

export default ChatListContainer
