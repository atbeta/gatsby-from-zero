import React from 'react'
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Container } from '@theme-ui/components'
import { FaCalendarAlt, FaUser } from 'react-icons/fa'

const CoverContainer = styled.div`
height: ${props => props.height? props.height : `100vh`};
background-image: url(${props => props.bg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-flow: column nowrap;
justify-content: center;
z-index: 1;
&::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(180deg, #000000 0%, rgba(51, 51, 51, 0.5) 100%);
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
const containerStyle = css`
z-index: 2;
.tag-container {
  margin-bottom: 20px;
}
`

const titleStyle = css`
color: white;
font-size: 40px;
font-weight: bold;
`
const infoStyle = css`
color: white;
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
const excerptStyle = css`
color: white;
line-height: 1.5em;
margin-bottom: 30px;
`

const Cover = props => {
  const tagList = props.tags
  const height = `100vh`
  return (
    <CoverContainer height={height} bg={props.cover.publicURL}>
      <Container css={containerStyle}>
        <div className="tag-container">
          {tagList.map((item, index) => <Tags key={index}>{item.name}</Tags>)}
        </div>
        <div css={titleStyle}>{props.title}</div>
        <p css={excerptStyle}>{props.excerpt}</p>
        <div css={infoStyle}>
          <span className="info-item"><FaCalendarAlt className="fa-icon" />{props.createdAt}</span>
          <span className="info-item"><FaUser className="fa-icon" />{props.author.username}</span>
        </div>
      </Container>
    </CoverContainer>
  )
}

export default Cover