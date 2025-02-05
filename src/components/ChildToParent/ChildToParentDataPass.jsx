import React from 'react'

const ChildComponent = (props) => {
    props.sendData("hello . im child")


  return (
    <div>ChildComponent</div>
  )
}

export default ChildComponent