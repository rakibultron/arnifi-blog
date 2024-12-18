const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {

    const { token } = req.cookies;


    if (!token) {
        return res.status(401).json({ error: 'Access denied. User is not authenticated.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ error: 'Invalid token' });
    }
};

module.exports = authenticate;
