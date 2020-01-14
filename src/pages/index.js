import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostCard from '../components/post-card'

const Index = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        {data.allStrapiPost.edges.map(({ node }) => (
          <PostCard {...node} key={node.id}/>
        ))}
      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query {
    allStrapiPost {
    edges {
      node {
        content
        id
        title
        excerpt
        createdAt
        url
        public
        cover {
          publicURL
        }
        tags {
          name
          slug
        }
        author {
          username
        }
      }
    }
  }
  }
`
