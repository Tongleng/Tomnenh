const express = require('express');

const { check } = require('express-validator');

const userController = require('../controllers/user-controller');

const router = express();

router.get('/', userController.getUser);

router.get('/:uid', userController.getUserById);

router.post('/login', 
    check('email')
        .normalizeEmail()
        .isEmail(),
    check('password')
        .isLength({min: 8}
    ),
    userController.logIn
    );

router.post('/signup', 
    check('username')
        .not()
        .isEmpty(),
    check('email')
        .normalizeEmail()
        .isEmail(),
    check('password')
        .isLength({min: 8}
    ),
    userController.signUp);

module.exports = router;