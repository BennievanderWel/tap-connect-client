import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { getChatsQuery } from '../../services/api/queries'
import Loader from '../../utils/components/loader'
import ChatList from './chat-list'

class ChatListContainer extends Component {
  render() {
    return (
      <Query query={getChatsQuery}>
        {({ loading, data }) => {
          return (
            <React.Fragment>
              {loading && <Loader />}
              {!loading && <ChatList chats={data.getChats} />}
            </React.Fragment>
          )
        }}
      </Query>
    )
  }
}

export default ChatListContainer
