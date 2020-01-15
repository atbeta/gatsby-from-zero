import React from 'react'
import PropTypes from 'prop-types'
import { css, Global } from "@emotion/core"
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

const globalStyle = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
`

const contentStyle = css`
width: 100%;
margin-top: 20px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          logo {
            url
            alt
          }
          logoText
          copyrights
          menuList {
            title
            path
          }
        }
      }
    }
  `)
  const {
    title,
    logo,
    logoText,
    menuList,
    copyrights,
  } = data.site.siteMetadata

  return (
    <>
      <Global styles={globalStyle}/>
      <Header
        siteTitle={title}
        siteLogo={logo}
        logoText={logoText}
        menuList={menuList}
      />
        <div css={contentStyle}>{children}</div>
      <Footer copyrights={copyrights}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout