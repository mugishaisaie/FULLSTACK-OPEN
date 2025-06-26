import React from 'react'

function Content({parts}) {
  const {name,exercises} = parts[1]
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
     
    </div>
  )
}

export default Content
