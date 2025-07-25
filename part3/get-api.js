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

const app = express();

app.get('/',(request,response)=>{
  response.send('<h1>Hello World</h1>');

})

app.get('/app',(request,response)=>{
  response.send('<h2>Isaie Mugisha Fullstack Course</h2>');
})

app.get('/api/notes',(request,response)=>{
  response.json(notes);
})
//  Fetching  single note by ID

app.get('/api/notes/:id',(request,response)=>{
  const id = request.params.id;
  const note = notes.find((note)=>note.id === id);

  if(note){

    response.json(note);
  }else{
    response.status(404).end();
  }
})

const PORT = 3001;

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
  
})