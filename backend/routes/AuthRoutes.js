const express = require('express');
const router = express.Router();
const {LoginUser,RegisterUser} = require('../controllers/AuthController');
router.post('/register', RegisterUser);
router.post('/login',LoginUser);




module.exports = router;