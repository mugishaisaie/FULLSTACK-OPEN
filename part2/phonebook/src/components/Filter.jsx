import React from 'react'

function Filter({filter,setFilter}) {
  return (
    
     <div>
        Filter shown with a <input value={filter} onChange={(e)=>setFilter(e.target.value)}/>
      </div> 
  )
}

export default Filter



