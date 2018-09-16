import { store } from '..'
import { createMessage } from '../redux/actions'

/**
 * Store a new message in Redux to be picked up by the message toaster
 * @param {String} message The actual message string
 */
export function emitMessage(message) {
  store.dispatch(createMessage(message))
}
