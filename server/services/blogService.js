const Blog = require('../models/blog')

// Create a new blog
const createBlog = async ({ title, category, author, content, image, userId }) => {


    console.log({
        title,
        category,
        author,
        content,
        image,
        userId
    })

    if (!title || !category || !author || !content || !userId) {
        throw new Error('Missing required fields');
    }



    try {

        const newBlog = new Blog({
            title,
            category,
            author,
            content,
            image,
            userId
        });

        return await newBlog.save();
    } catch (err) {
        throw new Error(`Error saving blog: ${err.message}`);
    }
};

const getAllBlogs = async (query = {}) => {
    try {
        const blogs = await Blog.find(query).sort({ createdAt: -1 });
        return blogs;
    } catch (err) {
        throw new Error(`Error fetching blogs: ${err.message}`);
    }
};

const deleteBlog = async (blogId, userId) => {
    try {
        // Find the blog by ID
        const blog = await Blog.findById(blogId);

        if (!blog) {
            throw new Error('Blog not found');
        }

        // Check if the authenticated user is the author
        if (blog.author.toString() !== userId.toString()) {
            throw new Error('Unauthorized: You are not the author of this blog');
        }

        const deletedBlog = await Blog.findByIdAndDelete(blogId);

        return { message: 'Blog deleted successfully', data: deletedBlog };
    } catch (err) {
        throw new Error(err.message);
    }
};

const updateBlog = async ({ id, userId, updateData }) => {
    try {
        // Find and update the blog
        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            {
                $set: updateData,
            },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedBlog) {
            throw new Error('Blog not found');
        }

        // Check if the authenticated user is the author
        if (updatedBlog.author.toString() !== userId.toString()) {
            throw new Error('Unauthorized: You are not the author of this blog');
        }

        return updatedBlog;
    } catch (err) {
        throw new Error(err.message);
    }
};

const getBlogById = async (id) => {
    try {
        const blog = await Blog.findById(id).populate('userId', 'name email'); // Populate userId with name and email fields
        return blog;
    } catch (err) {
        throw new Error(`Error fetching blog by ID: ${err.message}`);
    }
};

// Fetch blogs for the logged-in user
const getAllBlogsByUser = async (userId) => {
    try {

        console.log({ userId })

        const blogs = await Blog.find({ userId }).sort({ createdAt: -1 });

        return blogs;
    } catch (err) {
        throw new Error(`Error fetching blogs: ${err.message}`); // If an error occurs, throw it
    }
};


module.exports = { createBlog, getAllBlogs, deleteBlog, getBlogById, updateBlog, getAllBlogsByUser }