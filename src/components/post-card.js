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
const coverStyle = css`
img {
  display: block;
  width: 100%;
  margin-bottom: 20px;
}
`
const excerptStyle = css`
line-height: 1.5em;
`

const PostCard = (props) => {
  const tagList = props.tags
  const coverUrl = props.cover ? props.cover.publicURL : ''
  return (
  <div css={cardStyle}>
  <div css={coverStyle}>
    <img alt="" src={coverUrl}></img>
  </div>
  <div css={tagLineStyle}>
    {tagList.map((item, index) => <Tags key={index}>{item.name}</Tags>)}
    <span css={css`margin-left: auto;`}><FaRegBookmark /></span>
  </div>
  <Link to={props.url} css={css`text-decoration: none;`}>
  <div css={postTitleStyle}>
    {props.title}
  </div>
  </Link>
  <p css={excerptStyle}>{props.excerpt}</p>
  <div css={infoStyle}>
    <span className="info-item"><FaCalendarAlt className="fa-icon" />{props.createdAt}</span>
    <span className="info-item"><FaUser className="fa-icon" />{props.author.username}</span>
  </div>
</div>)
}

PostCard.propTypes = {
  author: PropTypes.shape({
    username: PropTypes.string
  }),
  cover: PropTypes.shape({
    publicURL: PropTypes.string
  }),
  tags: PropTypes.array,
  title: PropTypes.string,
  content: PropTypes.string,
  excerpt: PropTypes.string,
  id: PropTypes.string,
  url: PropTypes.string,
  public: PropTypes.bool,
  createdAt: PropTypes.string
}

PostCard.defaultProps = {
  author: {
    username: ''
  },
  cover: {
    publicURL: ''
  },
  tags: [],
  title: '',
  content: '',
  excerpt: '',
  id: '',
  url: '',
  public: true,
  createdAt: ''
}

export default PostCard
