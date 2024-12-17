const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Blog title is required'],
            trim: true,
            maxlength: [100, 'Title cannot exceed 100 characters'],
        },
        category: {
            type: String,
            required: [true, 'Category is required'],
            enum: ['Career', 'Finance', 'Travel', 'Technology', 'Lifestyle'],
        },
        author: {
            type: String,
            required: [true, 'Author name is required'],
        },
        content: {
            type: String,
            required: [true, 'Content is required'],
        },
        image: {
            type: String,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User ID is required'],
        },
    },
    {
        timestamps: true,
    }
);

const Blog = mongoose.model('Blog', blogSchema);


module.exports = Blog;