import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'
import {
  HeaderStyled,
  HeaderLeftContent,
  HeaderRightContent,
  UsernameText
} from './header.styled'
import {
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import Icon from '../../utils/icons'
import { getCurrentUser } from '../../utils/cache'

class Header extends Component {
  state = {
    anchorEl: null
  }

  openMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  closeMenu = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    return (
      <HeaderStyled>
        <HeaderLeftContent>
          <Typography variant="h6">TapConnect</Typography>
        </HeaderLeftContent>
        <HeaderRightContent>
          <UsernameText>
            <Typography align="center" noWrap>
              {getCurrentUser(this.props.client).username}
            </Typography>
          </UsernameText>
          <IconButton onClick={this.openMenu}>
            <Icon icon="ellipsis" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.closeMenu}
          >
            <MenuItem onClick={this.props.onLogout}>
              <ListItemIcon>
                <Icon icon="power" />
              </ListItemIcon>
              <ListItemText inset primary="Uitloggen" />
            </MenuItem>
          </Menu>
        </HeaderRightContent>
      </HeaderStyled>
    )
  }
}

export default withApollo(Header)

Header.propTypes = {
  client: PropTypes.object,
  onLogout: PropTypes.func.isRequired
}
