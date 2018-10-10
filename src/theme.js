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
    green: '#3CB371',
    offwhite: '#FFFAFA',
    red: '#FF6347',
    white: '#FFF',
    redwhite: '#FFEEEA',
    lightred: '#FFCDC3',
    grey: '#878e91',
    black: 'rgb(0,0,0,.87'
  }
}

export default theme
