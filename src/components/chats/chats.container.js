import React, { Component } from 'react'
import { ChatsStyled } from './chats.styled'
import Card from '../card/card.styled'

class ChatsContainer extends Component {
  render() {
    return (
      <ChatsStyled>
        <Card>test</Card>
      </ChatsStyled>
    )
  }
}

export default ChatsContainer
