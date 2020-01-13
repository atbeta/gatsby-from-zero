import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from '@emotion/styled'
import { css } from "@emotion/core"
import { FaRegBookmark, FaCalendarAlt, FaUser } from 'react-icons/fa'

const cardStyle = css`
margin-top: 20px;
border-bottom: 1px solid rgba(0, 0, 0, .1);
`
const postTitleStyle = css`
margin-top: 20px;
font-size: 2em;
font-weight: bold;
line-height: 1.5;
color: #000;
&:hover {
  color: #007bff;
}
`
const Tags = styled.span`
margin-right: 10px;
font-size: 12px;
color: #a0a8bd;
border: 1px solid transparent;
background: rgba(160, 168, 189, .2);
border-radius: 15px;
padding: 3px 15px;
`
const tagLineStyle = css`
display: flex;
justify-content: flex-start;
align-items: center;
`

const infoStyle = css`
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 20px;
.info-item {
  margin-right: 20px;
  font-size: 14px;
  .fa-icon {
    margin-right: 5px;
  }
}
`

const PostCard = (props) => {
  const tagList = props.frontmatter.tag
  return (
  <div css={cardStyle}>
  <div css={tagLineStyle}>
    {tagList.map(item => <Tags>{item}</Tags>)}
    <span css={css`margin-left: auto;`}><FaRegBookmark /></span>
  </div>
  <Link to={props.fields.slug} css={css`text-decoration: none;`}>
  <div css={postTitleStyle}>
    {props.frontmatter.title}
  </div>
  </Link>
  <p>{props.excerpt}</p>
  <div css={infoStyle}>
    <span className="info-item"><FaCalendarAlt className="fa-icon" />{props.frontmatter.date}</span>
    <span className="info-item"><FaUser class="fa-icon" />{props.frontmatter.author}</span>
  </div>
</div>)
}

export default PostCard
