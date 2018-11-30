import gql from 'graphql-tag'

// =====
// Users
// =====

export const getUserQuery = gql`
  {
    getUser {
      _id
      username
      email
    }
  }
`

// =====
// Chats
// =====

export const getChatsQuery = gql`
  {
    getChats {
      _id
      displayName
      users {
        email
        username
        _id
      }
      isGroup
    }
  }
`

export const addChatQuery = gql`
  mutation AddChat($email: String) {
    addChat(email: $email) {
      _id
      displayName
      isGroup
      users {
        _id
        username
        email
      }
    }
  }
`
