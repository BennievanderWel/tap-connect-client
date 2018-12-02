import React from 'react'
import Card from '../../utils/components/card/card'
import { ChatStyled } from './chat.styled'

const Chat = () => {
  return (
    <ChatStyled>
      <Card fullHeight fullWidth>
        <span>Hi from Chat!!</span>
      </Card>
    </ChatStyled>
  )
}

export default Chat
