const Blog = require('../models/blogs');



const listBlogs = (req,res,next)=>{
   
        Blog.find({}).then((blogs) => {
    res.json(blogs)
  }).catch(next)
    
        
}

const createBlogs = (req,res,next)=>{
    
        const blog = new Blog(req.body)

  blog.save().then((result) => {
    res.status(201).json(result)
  }).catch(next)

   
}

module.exports ={
    listBlogs,
    createBlogs
}