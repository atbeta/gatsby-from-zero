import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Index = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>文章的列表</h1>
        <h4>共{data.allMarkdownRemark.totalCount} 篇文章</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
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
          excerpt
        }
      }
    }
  }
`
