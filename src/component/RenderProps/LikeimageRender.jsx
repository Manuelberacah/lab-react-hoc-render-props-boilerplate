import React from 'react'

const LikeimageRender = (props) => {
    let {count,increment} = props
    return (
      <>
          <button onClick={increment}>Image {count}</button>
      </>
    )
}

export default LikeimageRender