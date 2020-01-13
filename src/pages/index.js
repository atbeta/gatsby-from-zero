import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Index = ({ data }) => {
  return (
    <Layout>

      <div>
        <h1>文章列表</h1>
        <h4>共{data.allMarkdownRemark.totalCount} 篇文章</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
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
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
