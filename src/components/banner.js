import React, { useState, useEffect } from 'react'
import { css } from "@emotion/core"
import Cover from './cover'

const bannerStyle = css`
height: 100vh;
overflow: hidden;
.banner-item {
  display: inline-block;
  transition: all 0.3s ease-in-out;
}
`

const Banner = props => {
  const [list, setList] = useState([...props.list])
  useEffect(() => {
    const swiper = setInterval(() => {
      list.push(list.shift())
      setList([...list])
    }, 2000)
    return () => clearInterval(swiper)
  })
  return (
    <div css={bannerStyle}>
      <Cover {...list[0].node} className="banner-item" key={list[0].node.id}></Cover>
    </div>
  )
}

export default Banner