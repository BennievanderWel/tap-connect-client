import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextStyled = styled.div`
  font-family: 'Roboto';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

class Text extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    return <TextStyled>{this.props.text}</TextStyled>
  }
}

export default Text
