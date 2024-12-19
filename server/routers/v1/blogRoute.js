const express = require('express');
const router = express.Router();
const { createBlog, getAllBlogs, getBlogById, deleteBlogHandler, updateBlogHandler, getAllBlogsByUser } = require('../../controllers/blogControlers')
const authenticate = require('../../middlewares/authMiddleware')


router.get('/user', authenticate, getAllBlogsByUser);

router.post('/', authenticate, createBlog)

router.get('/', authenticate, getAllBlogs)

router.get('/:id', authenticate, getBlogById)

router.put('/:id', authenticate, updateBlogHandler);

router.delete('/:id', authenticate, deleteBlogHandler);






module.exports = router;
