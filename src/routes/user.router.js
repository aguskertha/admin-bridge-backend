const express = require('express')
const authenticate = require('../middleware/authenticate');;
const router = express.Router();
const { 
    register,
    login,
    getUsers,
    token,
    logout,
    getUserByID
} = require('../controllers/user.controller');

router.get('/', authenticate, getUsers);
router.get('/token', token);
router.get('/:userID', authenticate, getUserByID);
router.post('/register', register);
router.post('/login', login);
router.delete('/logout', logout);

module.exports = router;