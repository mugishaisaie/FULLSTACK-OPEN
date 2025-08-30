// const persons = [
//     { 
//       "id": "1",
//       "name": "Arto Hellas", 
//       "number": "040-123456"
//     },
//     { 
//       "id": "2",
//       "name": "Ada Lovelace", 
//       "number": "39-44-5323523"
//     },
//     { 
//       "id": "3",
//       "name": "Dan Abramov", 
//       "number": "12-43-234345"
//     },
//     { 
//       "id": "4",
//       "name": "Mary Poppendieck", 
//       "number": "39-23-6423122"
//     }
// ]

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
// const path = require('path');

app.use(express.static('dist'))
app.use(express.json())
// app.use(morgan('tiny'));
app.use(cors());

morgan.token('body',(req)=>JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
const Person = require('./model/person')
const PORT  = process.env.PORT;

app.get('/info',(req,res)=>{
  res.write(`<p>Phonebook has info for ${persons.length} people</p>`);
  res.end(`${ new Date().toString()}`);
})
// 
app.get('/api/persons',async(req,res)=>{

 try {
  const persons = await Person.find({});
  res.status(200).json(persons);
  
  
 } catch (error) {
  console.error('Error fetching persons:', error);
  res.status(500).json({ error: 'Internal Server Error' });
  
 }
  
})
app.get('/api/persons/:id',(req,res)=>{
  const id = req.params.id;
  
  const person = persons.find((person)=>person.id === id);
  if(!person){
    return res.status(404).json({ error: `Person with Id : ${id} Not found`});
  }
  res.status(200).json(person);
})
app.delete('/api/persons/:id',(req,res)=>{
  const id = req.params.id;
  
  const person = persons.find((person)=>person.id === id);
  if(!person){
    return res.status(404).json({ error: `Person with Id : ${id} Not found`});
  }
  
  const newPerson = persons.filter((person)=>person.id !== id);
  res.status(200).json(newPerson);
})
app.post('/api/persons',(req,res)=>{
    
  const {name,number}= req.body
const id = Math.floor(Math.random() * 10000).toString();
// console.log(name,number);
if(!name || !number){
  return res.status(400).json({ error: 'Name or Number is missing' });
  
}

const existingPerson = persons.find((person)=>person.name.toLocaleLowerCase() === name.toLocaleLowerCase());
if(existingPerson){
  return res.status(400).json({ error: `Name : ${name} already exists` });
}
const newPerson ={
  id,
  name,
  number
}
persons.push(newPerson);

res.status(201).json(persons)
})



// app.get('*',(req,res)=>{
//   res.sendFile(path.join(__dirname,'dist','index.html'));
// })

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})