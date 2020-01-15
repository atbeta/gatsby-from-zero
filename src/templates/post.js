import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Cover from '../components/cover'
import { Container } from '@theme-ui/components'
import ReactMarkdown from 'react-markdown'

export default ({ data }) => {
  const Image = props => {
    return <img alt="" {...props} style={{maxWidth: '100%'}} />
  }
  const post = data.strapiPost
  return (
    <Layout>
      <Cover
        title={post.title}
        imageUrl={post.cover.publicURL}
        tags={post.tags}
        author={post.author}
        createdAt={post.createdAt}
        excerpt={post.excerpt}
      >
      </Cover>
      <Container>
        <ReactMarkdown
          source={post.content}
          renderers={{image: Image}}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    strapiPost(id: {eq: $id}) {
      content
      title
      excerpt
      cover {
        publicURL
      }
      tags {
        name
        slug
      }
      createdAt
      author {
        username
      }
    }
  }
`