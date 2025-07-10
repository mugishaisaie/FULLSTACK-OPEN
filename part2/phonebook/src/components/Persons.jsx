import React from 'react'

function Persons({filteredPersons,handleDeletePerson}) {
  return (
    <div>

    { filteredPersons.map((person)=>{
        return <div key={person.name}>
          <p style={{display:'inline-block', marginRight:'10px'}}>{person.name} {person.number}</p> 
          <button onClick={()=>handleDeletePerson(person.id)}>Delete</button></div>
    })}
    </div>
  )
}

export default Persons
