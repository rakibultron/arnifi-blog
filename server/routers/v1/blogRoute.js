const express = require('express');
const router = express.Router();
const { createBlog } = require('../../controllers/blogControlers')
const authenticate = require('../../middlewares/authMiddleware')


router.post('/', authenticate, createBlog)


module.exports = router;
