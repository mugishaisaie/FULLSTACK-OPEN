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

app.use(express.json());

app.post('/api/notes',(request,response)=>{
  const note = request.body;
  response.json(note)
})


const PORT = 3001;

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
  
})