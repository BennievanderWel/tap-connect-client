import React, { Component } from 'react'
import { LoaderStyled } from './Loader.styled'
import { CircularProgress } from '@material-ui/core'

class Loader extends Component {
  render() {
    return (
      <LoaderStyled>
        <CircularProgress />
      </LoaderStyled>
    )
  }
}

export default Loader
