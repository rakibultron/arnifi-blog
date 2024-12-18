const express = require('express');
const router = express.Router();
const { register, login } = require('../../controllers/userControllers')

router.post('/signup', register)

router.post('/login', login)

router.get('/', (req, res) => {
    res.json({ message: 'Hello Auth!' });
});

module.exports = router;
