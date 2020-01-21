import React from 'react'
import PropTypes from 'prop-types'
import { css } from "@emotion/core"
import { Container } from '@theme-ui/components'
import TagCloud from './tag-cloud'
import AboutSite from './about-site'
import LatestPost from './latest-post'

const footerStyle = css`
height: 64px;
line-height: 64px;
background: #202226;
text-align: center;
color: white;
a {
  color: white;
}
`
const footerTopWrapperStyle = css`
background: black;
color: white;
`
const footerTopInnerWrapperStyle = css`
display: flex;
flex-flow: row nowrap;
.flex-wrapper {
  flex: 1;
  margin-right: 40px;
  &.latest-post {
    flex: 2;
  }
}
`
const Footer = ({ copyrights }) => (
  <>
  <div css={footerTopWrapperStyle}>
    <Container css={footerTopInnerWrapperStyle}>
    <div className="flex-wrapper">
      <AboutSite />
    </div>
    <div className="flex-wrapper">
      <TagCloud />
    </div>
    <div className="flex-wrapper latest-post">
      <LatestPost />
    </div>
    </Container>
  </div>
  <footer css={footerStyle} >
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className="footerCopyrights">
          Copyright © 2020 Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
      </>
    )}
  </footer>
  </>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer