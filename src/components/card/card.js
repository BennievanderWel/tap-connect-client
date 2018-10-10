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
    children: PropTypes.array,
    fullHeight: PropTypes.bool,
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
    mode: 'paper',
    fullHeight: false
  }

  render() {
    const { mode, submitting, fullHeight } = this.props

    return (
      <CardStyled fullHeight={fullHeight}>
        <CardContentStyled>{this.props.children}</CardContentStyled>
        {mode === 'form' ? (
          submitting ? (
            <SubmittingIndicatorStyled color="primary" />
          ) : (
            <SubmittingIndicatorPlaceholderStyled />
          )
        ) : (
          <div />
        )}
      </CardStyled>
    )
  }
}

export default Card
