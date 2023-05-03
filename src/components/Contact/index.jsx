import React from 'react'

export const Contact = () => {
  console.log(window.location.pathname)
  return (
    <div>
      <button onClick={()=> window.location.reload()}>reload</button>
    </div>
   
  )
}