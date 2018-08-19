import axios from 'axios'

/**
 * Save the token in de Axios headers so that it will be provided
 * with every request
 * @param {String} token The user authentication token
 */
export function saveToken(token) {
  axios.defaults.headers.common['Authorization'] = token
}
