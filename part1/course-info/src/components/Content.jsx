import React from 'react'

function Content({parts}) {
  return (
    <div>
      {parts.map((part)=><p key={part.exercises}>{part.name} {part.exercises}</p>)}
     
    </div>
  )
}

export default Content
