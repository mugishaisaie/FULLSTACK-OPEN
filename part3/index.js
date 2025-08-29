                                                      let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());


// your password
const password = process.argv[2];

const url =`mongodb+srv://isaie:${password}@backend.2ywvipu.mongodb.net/phonebook?retryWrites=true&w=majority&appName=phonebook`
// strictQuery:false is used to let mongoose know how to handle fields that are not defined in the schema
mongoose.set('strictQuery',false)

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean
})

const Note = mongoose.model('Note',noteSchema);

app.get('/',(request,response)=>{
  Note.find({}).then((note)=>{
    response.json(note)
    mongoose.connection.close();
  })
})

app.post('/api/notes',(request,response)=>{
  const note = request.body;
  response.json(note)
})


const PORT = 3001;

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
  
})