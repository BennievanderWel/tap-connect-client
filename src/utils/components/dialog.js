import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Dialog, DialogTitle, LinearProgress } from '@material-ui/core'
import Slide from '@material-ui/core/Slide'

const SubmittingPlaceholder = styled.div`
  height: 5px;
  background-color: ${props => props.theme.colors.lightred};
`

function Transition(props) {
  return <Slide direction="up" {...props} />
}

class FormDialog extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
      .isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  }

  render() {
    const { open, title, onClose, children, submitting } = this.props

    return (
      <Dialog open={open} onClose={onClose} TransitionComponent={Transition}>
        {title && <DialogTitle>{title}</DialogTitle>}
        {children}
        {submitting ? <LinearProgress /> : <SubmittingPlaceholder />}
      </Dialog>
    )
  }
}

export default FormDialog
