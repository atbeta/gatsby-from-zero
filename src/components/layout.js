import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

const Container = styled.div`
width: 100%;
max-width: 800px;
margin: auto;
display: flex;
flex-flow: column nowrap;
justify-content: center;
`
const contentStyle = css`
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
    <Container>
      <Header
        siteTitle={title}
        siteLogo={logo}
        logoText={logoText}
        menuList={menuList}
      />
      <div css={contentStyle}>{children}</div>
      <Footer copyrights={copyrights}/>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout