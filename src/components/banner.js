import React, { useState, useEffect } from 'react'
import { css } from "@emotion/core"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Cover from './cover'

const bannerStyle = css`
width: 100%;
height: 100vh;
overflow: hidden;
display: none;
&:first-child {
  display: block;
}
`

const Banner = props => {
  const [list, setList] = useState([...props.list])
  useEffect(() => {
    const swiper = setInterval(() => {
      list.push(list.shift())
      setList([...list])
    }, 3000)
    return () => clearInterval(swiper)
  })
  return (
      <ReactCSSTransitionGroup
          transitionEnter={true}
          transitionLeave={false}
          transitionEnterTimeout={3000}
          transitionLeaveTimeout={3000}
          transitionName={{
            enter: 'fadeIn',
            leave: 'fadeOut',
          }}
        >
        <div css={bannerStyle} className="animated" key={list[0].node.id}>
            <Cover {...list[0].node} key={list[0].node}></Cover>
        </div>
      </ReactCSSTransitionGroup>
  )
}

export default Banner