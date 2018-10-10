import React, { Component } from 'react'
import { ChatsStyled } from './chats.styled'
import Card from '../card/card.styled'
import { emitMessage } from '../../utils/messageToaster'
import { Typography, Button } from '@material-ui/core'
import { Query } from 'react-apollo'
import { getChatsQuery } from '../../services/api/queries'

class ChatsContainer extends Component {
  render() {
    return (
      <Query query={getChatsQuery}>
        {() => (
          <ChatsStyled>
            <Card>
              <Button color="primary" variant="outlined" fullWidth>
                Add chat
              </Button>
            </Card>
          </ChatsStyled>
        )}
      </Query>
    )
  }
}

export default ChatsContainer
