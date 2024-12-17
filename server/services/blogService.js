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


const getAllBlogs = async () => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        return blogs;
    } catch (err) {
        throw new Error(`Error fetching blogs: ${err.message}`);
    }
};


module.exports = { createBlog, getAllBlogs }