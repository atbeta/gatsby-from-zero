import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const AboutSite = props => {
    const data = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  const description = data.site.siteMetadata.description
  return (
  <div>
    <h1>关于本站</h1>
    <p>{description}</p>
  </div>
  )
}

export default AboutSite