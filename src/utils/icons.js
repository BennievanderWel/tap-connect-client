import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import EllipsisIcon from '@material-ui/icons/MoreVert'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import PowerIcon from '@material-ui/icons/PowerSettingsNew'
import ClearIcon from '@material-ui/icons/Clear'
import AddIcon from '@material-ui/icons/Add'
import AddUserIcon from '@material-ui/icons/PersonAdd'
import UserIcon from '@material-ui/icons/Person'

const Spacer = styled.div`
  ${({ marginRight }) => (marginRight ? 'margin-right: 16px;' : '')}
  height: 24px;
`

const iconMapper = {
  ellipsis: EllipsisIcon,
  logout: LogoutIcon,
  power: PowerIcon,
  clear: ClearIcon,
  add: AddIcon,
  user: UserIcon,
  addUser: AddUserIcon,
}

const Icon = ({ icon, marginRight }) => {
  const MappedIcon = iconMapper[icon]
  return (
    <Spacer marginRight={marginRight}>
      <MappedIcon />
    </Spacer>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  marginRight: PropTypes.bool,
}

Icon.defaultProps = { marginRight: false }

export default Icon
