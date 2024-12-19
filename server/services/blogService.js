const Blog = require('../models/blog')

// Create a new blog
const createBlog = async ({ title, author, category, content, image, userId }) => {


    if (!title || !category || !content || !userId || !author) {
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


        if (blog.userId.toString() !== userId.toString()) {
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

        const blog = await Blog.findById(id);
        if (!blog) {
            throw new Error("Blog not found");
        }


        if (blog.userId.toString() !== userId.toString()) {
            throw new Error("Unauthorized: You are not the author of this blog");
        }


        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { $set: updateData },
            {
                new: true,
                runValidators: true,
            }
        );

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
        throw new Error(`Error fetching blogs: ${err.message}`);
    }
};


module.exports = { createBlog, getAllBlogs, deleteBlog, getBlogById, updateBlog, getAllBlogsByUser }