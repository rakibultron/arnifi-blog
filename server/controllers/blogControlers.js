
const blogService = require('../services/blogService');

// Create a new blog
const createBlog = async (req, res) => {
    try {
        console.log({ user: req.user })
        const { name } = req.user

        console.log({ name })

        const { title, category, content, image } = req.body;


        // Validate required fields
        if (!title || !category || !content) {
            return res.status(400).json({
                error: 'All required fields (title, category, author, content) must be filled.',
            });
        }

        const blog = await blogService.createBlog({
            title,
            category,
            author: name,
            content,
            image,
            userId: req.user.userId
        });

        res.status(201).json({
            message: 'Blog created successfully!',
            blog,
        });
    } catch (err) {
        console.error('Error creating blog:', err.message);
        res.status(500).json({
            error: 'Failed to create the blog.',
            details: err.message,
        });
    }
};

// Get blogs
const getAllBlogs = async (req, res) => {

    const { category, author } = req.query;

    let query = {};
    if (category) query.category = category;
    if (author) query.author = { $regex: author, $options: "i" };

    try {

        const blogs = await blogService.getAllBlogs(query);

        res.status(200).json({
            message: 'Blogs fetched successfully',
            blogs,
        });
    } catch (err) {
        console.error('Error fetching blogs:', err);


        res.status(500).json({
            error: 'Failed to fetch blogs',
            details: err.message || 'Unexpected error occurred',
        });
    }
};

// Delete blog
const deleteBlogHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.userId;


        const result = await blogService.deleteBlog(id, userId);


        res.status(200).json(result);
    } catch (err) {
        console.error('Error deleting blog:', err);


        res.status(400).json({
            error: 'Failed to delete blog',
            details: err.message || 'Unexpected error occurred',
        });
    }
};

// Update blog
const updateBlogHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.userId;
        const updateData = req.body;

        const updatedBlog = await blogService.updateBlog({ id, userId, updateData });

        res.status(200).json({
            message: 'Blog updated successfully',
            blog: updatedBlog,
        });
    } catch (err) {
        console.error('Error updating blog:', err);


        res.status(400).json({
            error: 'Failed to update blog',
            details: err.message || 'Unexpected error occurred',
        });
    }
};

// Get single blog by ID
const getBlogById = async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await blogService.getBlogById(id);

        if (!blog) {
            return res.status(404).json({
                message: 'Blog not found',
            });
        }

        res.status(200).json({
            message: 'Blog fetched successfully',
            blog,
        });
    } catch (err) {
        console.error('Error fetching blog:', err);

        res.status(500).json({
            error: 'Failed to fetch blog',
            details: err.message || 'Unexpected error occurred',
        });
    }
};

// Get all blogs for the logged-in user
const getAllBlogsByUser = async (req, res) => {
    try {
        const userId = req.user.userId;

        const blogs = await blogService.getAllBlogsByUser(userId);

        if (!blogs.length) {
            return res.status(404).json({
                message: 'No blogs found for the logged-in user',
            });
        }

        res.status(200).json({
            message: 'Blogs fetched successfully',
            blogs,
        });
    } catch (err) {
        console.error('Error fetching blogs:', err);
        res.status(500).json({
            error: 'Failed to fetch blogs',
            details: err.message || 'Unexpected error occurred',
        });
    }
};



module.exports = { createBlog, getAllBlogs, deleteBlogHandler, updateBlogHandler, getBlogById, getAllBlogsByUser };
