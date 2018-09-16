import React, { Component } from 'react'
import { ChatsStyled } from './chats.styled'
import Card from '../card/card.styled'
import { emitMessage } from '../../utils/messageToaster'
import { Typography, Button } from '@material-ui/core'

class ChatsContainer extends Component {
  render() {
    return (
      <ChatsStyled>
        <Card>
          <Typography>Insert chats here!</Typography>
          <Button
            variant="raised"
            onClick={() => emitMessage('This is a test!')}
          >
            Test message
          </Button>
        </Card>
      </ChatsStyled>
    )
  }
}

export default ChatsContainer
