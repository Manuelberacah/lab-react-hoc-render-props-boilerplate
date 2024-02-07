import React from 'react'

const LikePostRender = (props) => {
    let {count,increment} = props
  return (
    <>
        <button onClick={increment}>Post {count}</button>
    </>
  )
}

export default LikePostRender