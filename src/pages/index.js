import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostCard from '../components/post-card'
import { Container } from '@theme-ui/components'

const Index = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Container>
        {data.allStrapiPost.edges.map(({ node }) => (
          <PostCard {...node} key={node.id}/>
        ))}
      </Container>
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
        featured
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
