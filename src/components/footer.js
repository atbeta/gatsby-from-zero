import React from 'react'
import PropTypes from 'prop-types'
import { css } from "@emotion/core"

const footerStyle = css`
text-align: center;
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