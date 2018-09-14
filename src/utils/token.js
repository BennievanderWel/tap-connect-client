import axios from 'axios'

/**
 * Save the token in de Axios headers so that it will be provided
 * with every request
 * @param {String} token The user authentication token
 */
export function saveToken(token) {
  window.localStorage.setItem('Authorization', token)
  axios.defaults.headers.common['Authorization'] = token
}

/**
 * Remove the token from the Axios headers
 */
export function removeToken() {
  window.localStorage.removeItem('Authorization')
  delete axios.defaults.headers.common['Authorization']
}

/**
 * Get the token from Axios headers
 */
export function getToken() {
  return window.localStorage.getItem('Authorization')
}
