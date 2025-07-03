import { useState } from 'react'
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',number: '456789' }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

 
  const handleNameChange = (event) => {
    event.preventDefault();
    if(persons.some((person)=>person.name === newName)){
      alert(`${newName} is already added to Phonebook`);
      return;
    }
    setPersons([ ...persons, {name: newName,number:newNumber} ]);
    setNewName('');

  }
  // filtered persons

  const filteredPersons = persons.filter((person)=>person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} setFilter={setFilter} />
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} handleNameChange={handleNameChange} />
      <h2>Numbers</h2>
     <Persons filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App