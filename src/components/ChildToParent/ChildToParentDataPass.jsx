import React from 'react'

const ChildComponent = (props) => {
    props.sendData("hello . im child")


  return (
    <div>ChildComponent</div>
  )
}

export default ChildComponent












// ১. Parent Component-এ Callback Function তৈরি করা
// ২. সেই Callback Function-টি Props হিসেবে Child Component-এ পাঠানো
// ৩. Child Component-এ সেই Callback Function-কে Call করা
















