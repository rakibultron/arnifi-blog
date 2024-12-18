const express = require('express');
const router = express.Router();
const { createBlog, getAllBlogs, deleteBlogHandler, updateBlogHandler } = require('../../controllers/blogControlers')
const authenticate = require('../../middlewares/authMiddleware')


router.post('/', authenticate, createBlog)

router.get('/', authenticate, getAllBlogs)

router.put('/:id', authenticate, updateBlogHandler);

router.delete('/:id', authenticate, deleteBlogHandler);



module.exports = router;
