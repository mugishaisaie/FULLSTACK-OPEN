import React from 'react'

function Persons({filteredPersons,handleDeletePerson,handleEditPerson={handleEditPerson}}) {
  return (
    <div>
      <h2>Numbers</h2>

    { Array.isArray(filteredPersons) && filteredPersons.map((person)=>{
        return <div key={person.name} className='person-item'>
          <p style={{display:'inline-block', marginRight:'10px'}}>{person.name} {person.number}</p> 
          <button onClick={()=>handleDeletePerson(person.id)} className='del-btn'>Delete</button>
          <button onClick={()=>handleEditPerson(person.id)} className='edit-btn'>Edit✍️</button>
          </div>
    })}
    </div>
  )
}

export default Persons
