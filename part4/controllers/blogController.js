const Blog = require('../models/blogs');



const listBlogs = (req,res,next)=>{
    try {
        Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
    } catch (error) {
        next(error)
        
    }
}

const createBlogs = (req,res,next)=>{
    try{
        const blog = new Blog(request.body)

  blog.save().then((result) => {
    response.status(201).json(result)
  })

    }catch(error){
        next(error)
    }
}

module.exports ={
    listBlogs,
    createBlogs
}