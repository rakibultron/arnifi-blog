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


module.exports = { createBlog }