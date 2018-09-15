import { store } from '..'
import { createMessage } from '../redux/actions'

export function emitMessage(message) {
  store.dispatch(createMessage(message))
}
