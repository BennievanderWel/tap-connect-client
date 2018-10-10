import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextStyled = styled.div`
  font-family: 'Roboto';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.colors[props.color]};
  ${props => (props.fontStyle ? 'font-style:' + props.fontStyle : '')};
`

class Text extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    fontStyle: PropTypes.oneOf(['italic', 'bold']),
    color: PropTypes.oneOf(['grey', 'red'])
  }

  static defaultProps = {
    color: 'black'
  }

  render() {
    const { text, fontStyle, color } = this.props

    return (
      <TextStyled fontStyle={fontStyle} color={color}>
        {text}
      </TextStyled>
    )
  }
}

export default Text
