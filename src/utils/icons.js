import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import EllipsisIcon from '@material-ui/icons/MoreVert'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import PowerIcon from '@material-ui/icons/PowerSettingsNew'
import ClearIcon from '@material-ui/icons/Clear'
import AddIcon from '@material-ui/icons/Add'

const Spacer = styled.div`
  margin-right: 16px;
  height: 24px;
`

const iconMapper = {
  ellipsis: EllipsisIcon,
  logout: LogoutIcon,
  power: PowerIcon,
  clear: ClearIcon,
  add: AddIcon
}

const Icon = ({ icon }) => {
  const Icon = iconMapper[icon]
  return (
    <Spacer>
      <Icon />
    </Spacer>
  )
}

Icon.propTypes = { icon: PropTypes.string }

export default Icon
