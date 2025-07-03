import React from 'react'

function PersonForm({newName, setNewName, newNumber, setNewNumber, handleNameChange}) {
  return (
    
     <form onSubmit={handleNameChange}>
        <h2>Add new Person</h2>
        <div>
          name: <input  value={newName} onChange={(e)=>setNewName(e.target.value)}/>
        </div>
        
         <div>number: <input value={newNumber} onChange={(e)=>setNewNumber(e.target.value)}/></div>
       
        <div>
          <button type="submit">add</button>
        </div>
      </form> 
    
  )
}

export default PersonForm
