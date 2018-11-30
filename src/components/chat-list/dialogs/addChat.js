import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  DialogContent,
  TextField,
  Typography,
  DialogActions
} from '@material-ui/core'
import FormDialog from '../../../utils/components/dialog'
import { Mutation } from 'react-apollo'
import { addChatQuery, getChatsQuery } from '../../../services/api/queries'

class AddChatDialog extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  }

  constructor() {
    super()

    this.state = { email: '', submitting: false }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e, addChat) {
    e.preventDefault()
    this.setState(() => ({ submitting: true }))
    addChat({ variables: { email: this.state.email } })
    this.props.onSave(this.state.email)
    this.setState(() => ({ email: '', submitting: false }))
  }

  handleChange(value) {
    this.setState(() => ({ email: value }))
  }

  render() {
    const { open, onClose } = this.props
    const { submitting } = this.state

    return (
      <FormDialog
        title="Voeg een nieuwe chat toe"
        open={open}
        onClose={onClose}
        submitting={submitting}
      >
        <Mutation
          mutation={addChatQuery}
          update={(cache, { data: { addChat } }) => {
            const { getChats } = cache.readQuery({ query: getChatsQuery })
            console.log(getChats)
            cache.writeQuery({
              query: getChatsQuery,
              data: { getChats: getChats.concat([addChat]) }
            })
          }}
        >
          {addChat => (
            <form onSubmit={e => this.onSubmit(e, addChat)}>
              <DialogContent>
                <Typography>
                  Vul het e-mail adres in van de gebuiker waar je een chat mee
                  wilt starten
                </Typography>

                <TextField
                  fullWidth
                  label="E-mail adres"
                  value={this.state.email}
                  onChange={e => this.handleChange(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={onClose}>Annuleer</Button>
                <Button variant="contained" color="primary" type="submit">
                  Voeg toe
                </Button>
              </DialogActions>
            </form>
          )}
        </Mutation>
      </FormDialog>
    )
  }
}

export default AddChatDialog
