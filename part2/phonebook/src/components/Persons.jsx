import React from 'react'

function Persons({filteredPersons}) {
  return (
    <div>

    { filteredPersons.map((person)=>{
        return <p key={person.name}>{person.name} {person.number}</p>
    })}
    </div>
  )
}

export default Persons
