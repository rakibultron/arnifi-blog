const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../../controllers/userControllers')

router.post('/signup', register)

router.post('/login', login)

router.post('/logout', logout)

router.get('/', (req, res) => {
    res.json({ message: 'Hello Auth!' });
});

module.exports = router;
