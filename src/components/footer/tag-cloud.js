import React from 'react'
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from 'gatsby'

const Tag = styled.span`
font-size: 12px;
color: #a0a8bd;
border: 1px solid transparent;
background: rgba(160, 168, 189, .2);
border-radius: 15px;
padding: 3px 15px;
margin-bottom: 10px;
margin-right: 5px;
`
const tagWrapperStyle = css`
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
`

const TagCloud = props => {
    const data = useStaticQuery(graphql`
    query StrapiTagQuery {
      allStrapiTag {
        nodes {
          name
          slug
        }
      }
    }
  `)
  const tagList = data.allStrapiTag.nodes
  return (
    <div>
      <h1>标签</h1>
      <div css={tagWrapperStyle}>{tagList.map((tag, index) => <Tag>{tag.name}</Tag>)}</div>
    </div>
  )
}

export default TagCloud