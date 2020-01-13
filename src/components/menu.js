
import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from '@theme-ui/components'

const Menu = ({ menuList }) => {
  const menu = menuList.map((item, index) => (
    <NavLink href={item.path} p={2} key={index}>
      {item.title}
    </NavLink>
  ))
return <div>{menu}</div>
}

Menu.propTypes = {
  menuList: PropTypes.array
}

Menu.defaultProps = {
  menuList: []
}

export default Menu