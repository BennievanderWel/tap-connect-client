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
import { EllipsisIcon, PowerIcon } from '../../utils/icons'
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
          <Typography variant="title">TapConnect</Typography>
        </HeaderLeftContent>
        <HeaderRightContent>
          <UsernameText>
            <Typography align="center" noWrap>
              {getCurrentUser(this.props.client).username}
            </Typography>
          </UsernameText>
          <IconButton onClick={this.openMenu}>
            <EllipsisIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.closeMenu}
          >
            <MenuItem onClick={this.props.onLogout}>
              <ListItemIcon>
                <PowerIcon />
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
