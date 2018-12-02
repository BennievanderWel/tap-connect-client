import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Text from '../../utils/components/text'
import Icon from '../../utils/icons'
import { ChatListStyled } from './chat-list.styled'
import { DashboardContext } from '../../context'

class ChatList extends Component {
  renderChats() {
    const chats = this.props.chats

    if (chats.length === 0) {
      return (
        <Text fontStyle='italic' color='grey' text='Je hebt nog geen chats' />
      )
    } else {
      return (
        <DashboardContext.Consumer>
          {({ setChatId, currentChatId }) => (
            <List>
              {chats.map(chat => (
                <ListItem
                  key={chat._id}
                  button
                  onClick={() => setChatId(chat._id)}
                  selected={chat._id === currentChatId}
                >
                  <ListItemIcon>
                    <Icon icon='user' />
                  </ListItemIcon>
                  <ListItemText primary={chat.users[0].username} />
                </ListItem>
              ))}
            </List>
          )}
        </DashboardContext.Consumer>
      )
    }
  }

  render() {
    return <ChatListStyled>{this.renderChats()}</ChatListStyled>
  }
}

ChatList.propTypes = {
  chats: PropTypes.array,
}

export default ChatList
