import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostCard from '../components/post-card'

const Index = ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostCard {...node} key={node.id}/>
        ))}
      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tag
            author
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`
