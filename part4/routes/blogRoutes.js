
const express = require('express');
const router = express.Router();
const {listBlogs,createBlogs} = require('../controllers/blogController')

router.get('/',listBlogs)

router.post('/',createBlogs)


module.exports = router;