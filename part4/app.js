const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express()

const Blog = require('./models/blogs');
const blogRoutes = require('./routes/blogRoutes');

// const blogSchema = mongoose.Schema({
//   title: String,
//   author: String,
//   url: String,
//   likes: Number,
// })

// const Blog = mongoose.model('blog', blogSchema)

const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl)

app.use(express.json())
app.use('/api/blogs',blogRoutes)

// app.get('/api/blogs', (request, response) => {
//   Blog.find({}).then((blogs) => {
//     response.json(blogs)
//   })
// })

// app.post('/api/blogs', (request, response) => {
//   const blog = new Blog(request.body)

//   blog.save().then((result) => {
//     response.status(201).json(result)
//   })
// })

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})