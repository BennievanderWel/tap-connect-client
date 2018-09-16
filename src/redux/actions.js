export const CREATED_MESSAGE = 'CREATED_MESSAGE'
export const DELETED_MESSAGE = 'DELETED_MESSAGE'

/**
 * Create a new message
 * @param {String} message The actual message string
 */
export function createMessage(message) {
  return {
    type: CREATED_MESSAGE,
    payload: { message, id: new Date().getTime() }
  }
}

/**
 * Delete a message by id
 * @param {String} messageId The id of the message which
 * needs to be deleted
 */
export function deleteMessage(messageId) {
  return {
    type: DELETED_MESSAGE,
    payload: { id: messageId }
  }
}
