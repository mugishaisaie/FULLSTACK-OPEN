import { useEffect, useState } from 'react'
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import axios from 'axios'
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState(null);
  

  // handle fetch

  useEffect(()=>{
    const fetchPersons = () => {
      
        
       axios.get("http://localhost:3001/persons").then((response)=>{
         setPersons(response.data)

       }).catch((err)=>{
         console.error("Error fetching persons:", err);
       })
       
    }
    fetchPersons();
  },[])
 
  const handleNameChange = (event) => {
    event.preventDefault();
          const existingPerson = persons.find((person)=>person.name === newName);

    if(existingPerson && existingPerson.number === newNumber){
      alert(`${newName} is already added to Phonebook`);
      return;
    }

    if(existingPerson && existingPerson.number !== newNumber){

     const confirming = window.confirm(`${newName} is already to phonebook replace the old number with new number`)

     if(confirming){
      const updatedPerson = {...existingPerson,number: newNumber}
      axios.put(`http://localhost:3001/persons/${updatedPerson.id}`,updatedPerson).then((response)=>{
        setPersons(persons.map((person)=>person.id !== updatedPerson.id ? person : response.data));
        setNewName('');
        setNewNumber('');

      }).catch((error)=>{
        console.error("Error updating person:", error);
        setNotification(`Information of ${newName} has already been removed from server`);
      
      })
      
     }

     return;
    }

    const newPerson ={name: newName,number:newNumber} 
    
    axios.post(`http://localhost:3001/persons`,newPerson).then((response)=>{
      setPersons(persons.concat(response.data));
      setNewName('');
      setNewNumber('');
      setNotification(`${newName} Added Successfully`);
    }).catch((err)=>{
      console.log("some error occured while adding person",err);
    })
   
      


  }
  // filtered persons

  const filteredPersons = persons.filter((person)=>(person.name && person.name.toLowerCase().includes(filter.toLowerCase())));

  const handleDeletePerson = id =>{
    const personToDelete = persons.find((person)=>person.id ===id);
    const confirm = window.confirm(`Are you sure you want to delete ${personToDelete.name}?`)
    if(confirm) {
      axios.delete(`http://localhost:3001/persons/${id}`).then((response)=> console.log("Deleted : ",response.data) );

      setPersons(persons.filter((person)=>person.id !==id));

    }else{
      return
    }
      



    // if(window.confirm("Are you sure"))
  }

  return (
    <div>

      <Notification notification={notification} setNotification={setNotification} />
      <h2>Phonebook</h2>

      <Filter filter={filter} setFilter={setFilter} />
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} handleNameChange={handleNameChange} />
      <h2>Numbers</h2>
     <Persons filteredPersons={filteredPersons} handleDeletePerson={handleDeletePerson}/>
    </div>
  )
}

export default App