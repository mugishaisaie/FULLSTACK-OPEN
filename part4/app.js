const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express()

const blogRoutes = require('./routes/blogRoutes');


const mongoUrl = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
mongoose.connect(mongoUrl)

app.use(express.json())
app.use('/api/blogs',blogRoutes)





app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})