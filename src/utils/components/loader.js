import React, { Component } from 'react'
import { CircularProgress } from '@material-ui/core'
import styled from 'styled-components'

export const LoaderStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

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
