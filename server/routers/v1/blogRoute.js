const express = require('express');
const router = express.Router();
const { createBlog, getAllBlogs, deleteBlogHandler } = require('../../controllers/blogControlers')
const authenticate = require('../../middlewares/authMiddleware')


router.post('/', authenticate, createBlog)
router.get('/', authenticate, getAllBlogs)
router.delete('/:id', authenticate, deleteBlogHandler);


module.exports = router;
