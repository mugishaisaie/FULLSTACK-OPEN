import React from 'react'

function PersonForm({newName, setNewName, newNumber, setNewNumber, handleNameChange}) {
  return (
    
     <form onSubmit={handleNameChange}>
        <h2>Add new Person</h2>
        <div className='form-control'>
          name: <input  value={newName} onChange={(e)=>setNewName(e.target.value)}/>
        </div>
        
         <div className='form-control'>number: <input value={newNumber} onChange={(e)=>setNewNumber(e.target.value)}/></div>
       
        <div>
          <button type="submit">add</button>
        </div>
      </form> 
    
  )
}

export default PersonForm
