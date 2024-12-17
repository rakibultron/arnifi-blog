const userService = require('../services/userService');

// Register a new user
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;


        const user = await userService.createUser(name, email, password);

        // Send success response
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login user and return JWT token
const login = async (req, res) => {
    try {
        const { email, password } = req.body;


        const { user, token } = await userService.authenticateUser(email, password);

        // Send success response with the JWT token
        res.status(200).json({ message: 'Login successful', user, token });
    } catch (error) {

        console.log({ error })
        res.status(400).json({ error: error.message });
    }
};

module.exports = { register, login };
