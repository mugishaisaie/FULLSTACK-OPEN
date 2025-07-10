import React from 'react'

function Persons({filteredPersons,handleDeletePerson}) {
  return (
    <div>
      <h2>Numbers</h2>

    { filteredPersons.map((person)=>{
        return <div key={person.name} className='person-item'>
          <p style={{display:'inline-block', marginRight:'10px'}}>{person.name} {person.number}</p> 
          <button onClick={()=>handleDeletePerson(person.id)} className='del-btn'>Delete</button></div>
    })}
    </div>
  )
}

export default Persons
