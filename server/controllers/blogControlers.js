
const blogService = require('../services/blogService');

// Create a new blog
const createBlog = async (req, res) => {
    try {
        const { title, category, author, content, image } = req.body;


        // Validate required fields
        if (!title || !category || !author || !content) {
            return res.status(400).json({
                error: 'All required fields (title, category, author, content) must be filled.',
            });
        }


        // Create the blog using the service layer
        const blog = await blogService.createBlog({
            title,
            category,
            author,
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

module.exports = { createBlog };
