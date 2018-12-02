import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../utils/components/card/card'
import { SidebarStyled, SideBarBtnSectionStyled } from './sidebar.styled'
import { Button } from '@material-ui/core'
import Icon from '../../utils/icons'
import ChatListContainer from '../chat-list/chat-list.container'

const Sidebar = ({ toggleAddDialog }) => {
  return (
    <SidebarStyled>
      <SidebarStyled>
        <Card fullHeight noPadding>
          <SideBarBtnSectionStyled>
            <Button
              color='primary'
              variant='outlined'
              fullWidth
              onClick={toggleAddDialog}
            >
              <Icon icon='addUser' marginRight />
              Nieuwe chat
            </Button>
          </SideBarBtnSectionStyled>
          <ChatListContainer />
        </Card>
      </SidebarStyled>
    </SidebarStyled>
  )
}

Sidebar.propTypes = {
  toggleAddDialog: PropTypes.func.isRequired,
}

export default Sidebar
