import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  CardStyled,
  CardContentStyled,
  SubmittingIndicatorStyled,
  SubmittingIndicatorPlaceholderStyled
} from './card.styled'

class Card extends Component {
  static propTypes = {
    children: PropTypes.object,
    mode: PropTypes.oneOf(['form', 'paper']),
    submitting: (props, propName) => {
      // Console log an error if mode === 'form' and submitting value is
      // not a boolean
      if (props.mode === 'form') {
        if (typeof props[propName] !== typeof true) {
          console.error(
            `When the 'Card' component is in 'form' mode, the submitting prop is required and must be a boolean.`
          )
        }
      }

      return null
    }
  }

  static defaultProps = {
    mode: 'paper'
  }

  render() {
    const { mode, submitting } = this.props

    return (
      <CardStyled>
        <CardContentStyled>{this.props.children}</CardContentStyled>
        {submitting ? (
          <SubmittingIndicatorStyled color="primary" />
        ) : (
          <SubmittingIndicatorPlaceholderStyled />
        )}
      </CardStyled>
    )
  }
}

export default Card
