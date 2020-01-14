import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from 'react-markdown'

export default ({ data }) => {
  const Image = props => {
    return <img alt="" {...props} style={{maxWidth: '100%'}} />
  }
  const post = data.strapiPost
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <ReactMarkdown
          source={post.content}
          renderers={{image: Image}}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    strapiPost(id: {eq: $id}) {
      content
      title
    }
  }
`