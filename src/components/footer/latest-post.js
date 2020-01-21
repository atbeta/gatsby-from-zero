import React from 'react'
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"
import { FaCalendarAlt } from 'react-icons/fa'

const latestPostStyle = css`
a {
  text-decoration: none;
}
.post-title {
  font-weight: 600;
  margin-bottom: 5px;
  color: white;
  &:hover {
  color: #007bff;
}
}
.post-date {
  margin-top: 5px;
  font-size: 12px;
  color: white;
  span {
    padding-left: 5px;
  }
}
`
const LatestPost = props => {
  const data = useStaticQuery(graphql`
    query LatestPostQuery {
      allStrapiPost(limit: 3) {
        nodes {
          id
          title
          createdAt
          url
          public
        }
      }
    }
  `)
  const postList = data.allStrapiPost.nodes
  return (
    <div>
      <h1>最新文章</h1>
      {postList.map(post =><div key={post.id} css={latestPostStyle}>
        <Link to={post.url}>
        <p className="post-title">{post.title}</p>
        </Link>
        <p className="post-date"><FaCalendarAlt /><span>{post.createdAt}</span></p>
        </div>)}
    </div>
  )
}

export default LatestPost