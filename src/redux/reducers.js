import { CREATED_MESSAGE, DELETED_MESSAGE } from './actions'

export const messages = (state = [], action) => {
  switch (action.type) {
    case CREATED_MESSAGE:
      return [...state, action.payload]
    case DELETED_MESSAGE:
      return state.filter(m => m.id !== action.payload.id)
    default:
      return state
  }
}
