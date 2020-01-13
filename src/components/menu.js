
import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from '@theme-ui/components'

const Menu = ({ menuList }) => (
  menuList.map((item, index) => {
    return <NavLink href={item.path} p={2} key={index}>
      {item.title}
    </NavLink>
  }
))

Menu.propTypes = {
  menuList: PropTypes.array
}

Menu.defaultProps = {
  menuList: []
}

export default Menu