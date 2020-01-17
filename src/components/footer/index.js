import React from 'react'
import PropTypes from 'prop-types'
import { css } from "@emotion/core"

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

const Footer = ({ copyrights }) => (
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
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer