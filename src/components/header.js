import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import styled from '@emotion/styled'

import Menu from './menu'

const headerStyle = css`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const logoTextStyle = css`
color: #000;
font-size: 22px;
font-weight: 700;
`
const Cursor = styled.span`
@keyframes cursor {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}
display: inline-block;
  width: 10px;
  height: 1rem;
  background: #fe5186;
  margin-left: 5px;
  border-radius: 1px;
  animation: cursor 1s infinite;
`

const Header = ({ siteTitle,menuList }) => (
  <header css={headerStyle}>
      <Link to="/" css={css`text-decoration: none;`}>
        <span css={logoTextStyle}>{siteTitle}</span>
        <Cursor />
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
