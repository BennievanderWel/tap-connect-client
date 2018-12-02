import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MessageToasterStyled } from './MessageToaster.styled'
import Icon from '../../utils/icons'
import { deleteMessage } from 'redux/actions'
import { IconButton } from '@material-ui/core'

class MessageToaster extends Component {
  static propTypes = {
    queue: PropTypes.array, // Provided by Redux
    deleteMessage: PropTypes.func, // Provided by Redux
  }

  constructor() {
    super()

    this.state = {
      open: false,
      messageInProcess: null,
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleExited = this.handleExited.bind(this)
  }

  componentDidMount() {
    // Show any pending messages
    this.processQueue()
  }

  componentDidUpdate(prevProps) {
    // Check the queue, provided by Redux, if there are aby new messages
    // and start processing if there are any
    if (prevProps.queue.length !== this.props.queue.length) {
      this.processQueue()
    }
  }

  /**
   * Check the queue for messages and put them in the state in order the
   * show them
   */
  processQueue() {
    const { queue } = this.props
    if (queue.length > 0) {
      this.setState(() => ({ messageInProcess: queue[0], open: true }))
    }
  }

  /**
   * Hide the message
   */
  handleClose() {
    this.setState({ open: false })
  }

  /**
   * Delete the message from Redux and trigger the queue processing for
   * any messages left
   */
  handleExited() {
    this.props.deleteMessage(this.state.messageInProcess.id)
    this.setState(
      () => ({ messageInProcess: null, open: false }),
      () => {
        this.processQueue()
      },
    )
  }

  render() {
    const { open, messageInProcess } = this.state
    return (
      <MessageToasterStyled
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={2000}
        onClose={this.handleClose}
        onExited={this.handleExited}
        message={messageInProcess ? messageInProcess.message : ''}
        action={[
          <IconButton key='close' onClick={this.handleClose}>
            <Icon icon='clear' />
          </IconButton>,
        ]}
      />
    )
  }
}

const mapPropsToState = ({ messages }) => ({
  queue: messages,
})

export default connect(
  mapPropsToState,
  { deleteMessage },
)(MessageToaster)
