const express = require('express');
const router = express.Router();
const { createBlog, getAllBlogs } = require('../../controllers/blogControlers')
const authenticate = require('../../middlewares/authMiddleware')


router.post('/', authenticate, createBlog)
router.get('/', authenticate, getAllBlogs)


module.exports = router;
