import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

import Menu from './menu'

const headerStyle = css`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const logoTextStyle = css`
color: #000;
text-decoration: none;
font-weight: 700;
`

const Header = ({ siteTitle,menuList }) => (
  <header css={headerStyle}>
      <Link to="/" css={logoTextStyle}>
        {siteTitle}
      </Link>
      <Menu menuList={menuList} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
