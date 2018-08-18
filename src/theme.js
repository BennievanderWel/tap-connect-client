import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    height: 100%;
  }
`

const theme = {
  colors: {
    green: 'mediumseegreen',
    offwhite: 'snow',
    red: 'tomato',
    white: 'white',
    redwhite: '#FFEEEA'
  }
}

export default theme
