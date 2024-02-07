import React, { useState } from 'react'

const RenderPropsomponent = (props) => {
    let [count,setCount] =useState(0)

    const increment = () =>{ 
        setCount((prev) =>prev+1)
    }
  return (
    <>
    {props.render(count,increment)}
    </>
  )
}

export default RenderPropsomponent