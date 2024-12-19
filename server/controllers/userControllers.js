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
        res.cookie('token', token, {
            expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        });
        res.status(200).send({ message: 'Login successful', user, token });

    } catch (error) {

        console.log({ error })
        res.status(400).json({ error: error.message });
    }
};





const logout = (req, res) => {
    try {
        userService.logoutUser(res);
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Logout failed. Please try again later.' });
    }
};


module.exports = { register, login, logout };
