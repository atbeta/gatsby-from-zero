import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import styled from '@emotion/styled'
import { Container } from '@theme-ui/components'

import Menu from './menu'

const headerStyle = css`
width: 100%;
background: rgba(0, 0, 0, .8);
position: fixed;
top: 0;
padding: 20px 0;
z-index: 9999;
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`
const logoTextStyle = css`
color: #fff;
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
    <Container className="header-container">
      <Link to="/" css={css`text-decoration: none;`}>
        <span css={logoTextStyle}>{siteTitle}</span>
        <Cursor />
      </Link>
      <Menu menuList={menuList} />
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
