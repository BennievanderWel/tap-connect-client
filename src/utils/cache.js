import gql from 'graphql-tag'

/**
 * Get the current logged in user from the ApolloClient cache
 * @param {object} client The ApolloClient
 */
export function getCurrentUser(client) {
  return client.readQuery({
    query: gql`
      {
        getUser {
          _id
          username
          email
        }
      }
    `
  }).getUser
}
