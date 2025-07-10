import React from 'react'

function Filter({filter,setFilter}) {
  return (
    
     <div style={{margin:'10px'}}>
        Filter shown with a <input value={filter} placeholder='Search Here' onChange={(e)=>setFilter(e.target.value)}/>
      </div> 
  )
}

export default Filter



