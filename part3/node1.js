// const http = require('http');

// const app = http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type': 'text/plain'})
//     response.end('Hello World')
// })

// const PORT = 30001;
// app.listen(PORT)
// console.log(`Server running on port ${PORT}`)

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

const http = require('http');

const app = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'application/json'})
    response.end(JSON.stringify(notes));
})

const PORT = 3001;

app.listen(PORT)