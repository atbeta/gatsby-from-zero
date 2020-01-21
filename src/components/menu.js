
import React from 'react'
import PropTypes from 'prop-types'
import { css } from "@emotion/core"
import { NavLink } from '@theme-ui/components'

const menuStyle = css`
display: flex;
justify-content: flex-end;
font-size: 14px;
.menu-item {
  flex: 1;
  margin-left: 20px;
}
`

const Menu = ({ menuList }) => {
  const menu = menuList.map((item, index) => (
    <NavLink href={item.path} p={2} key={index} className="menu-item">
      {item.title}
    </NavLink>
  ))
return <div css={menuStyle}>{menu}</div>
}

Menu.propTypes = {
  menuList: PropTypes.array
}

Menu.defaultProps = {
  menuList: []
}

export default Menu