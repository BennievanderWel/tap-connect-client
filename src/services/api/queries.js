import gql from 'graphql-tag'

export const getUserQuery = gql`
  {
    getUser {
      _id
      username
      email
    }
  }
`
