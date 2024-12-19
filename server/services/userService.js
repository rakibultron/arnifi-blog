const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Create a new user
const createUser = async (name, email, password) => {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashedPassword
    });

    await user.save();
    return user;
};

// Authenticate user and return JWT token
const authenticateUser = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    // Compare the password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    console.log({ passwordMatch })

    if (!passwordMatch) {
        throw new Error('Invalid password');
    }

    // Generate a JWT token
    const token = jwt.sign(
        { userId: user._id, name: user.name, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1y' }
    );

    return { user, token };
};




const logoutUser = (res) => {
    try {

        res.clearCookie('token', {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        });
    } catch (error) {

        throw new Error('Failed to clear cookie');
    }
};


module.exports = { createUser, authenticateUser, logoutUser };
