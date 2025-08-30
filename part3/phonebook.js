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

const errorHandler = require('./errorHandler/errorHandler')

app.use(express.static('dist'))
app.use(express.json())
// app.use(morgan('tiny'));
app.use(cors());

morgan.token('body',(req)=>JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
const Person = require('./model/person')
const PORT  = process.env.PORT;

// app.get('/info',(req,res)=>{
//   res.write(`<p>Phonebook has info for ${persons.length} people</p>`);
//   res.end(`${ new Date().toString()}`);
// })
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
app.get('/api/persons/:id',async(req,res)=>{
  // const id = req.params.id;
  
  const person = await Person.findById(req.params.id);
  if(!person){
    return res.status(404).json({ error: `Person with Id : ${id} Not found`});
  }
  res.status(200).json(person);
})

// delete a person
app.delete('/api/persons/:id',async(req,res)=>{
  // const id = req.params.id;
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    if(!person){
      return res.status(404).json({ error: `Person with Id : ${id} Not found`});
    }
    
  } catch (error) {
    console.error('Error deleting person:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
    
  }
  
  // const newPerson = Person.filter((person)=>person._id !== id);
  // res.status(200).json(newPerson);
})

// create a new person
app.post('/api/persons',async(req,res)=>{
    
  const {name,number} = req.body
// const id = Math.floor(Math.random() * 10000).toString();
console.log(name,number);

 
if(!name || !number){
  return res.status(400).json({ error: 'Name or Number is missing' });
  
}

const existingPerson = await Person.findOne({name: new RegExp(`^${name}$`,'i')});
if(existingPerson){
  return res.status(400).json({ error: `Name : ${name} already exists` });
}
Person.create({name,number}).then((result)=>{
  res.status(201).json(result)
 }).catch((err)=>{
  console.error('Error saving person:', err);
  res.status(500).json({ error: 'Internal Server Error' });
 })
})

app.put('/api/persons/:id',async(req,res)=>{

  try {
    
    const {name,number} = req.body;
    const id = req.params.id;
  
    const updatedPerson = await Person.findByIdAndUpdate(id,{name,number},{
      new:true,
      runValidators:true
    })

    if(!updatedPerson){
      return res.status(404).json({ error: `Person with Id : ${id} Not found`});
    }
    res.status(200).json(updatedPerson);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
    
  }

})

// Error and unknown endpoint handling

const unknownEndpoint = (req,res)=>{
  res.status(404).json({ error: 'Unknown Endpoint' });

}
app.use(unknownEndpoint)

app.use(errorHandler)

// app.get('*',(req,res)=>{
//   res.sendFile(path.join(__dirname,'dist','index.html'));
// })

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})