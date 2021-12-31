const express = require('express');

const corporationController = require('../controllers/corporation-controller');

const router = express();

router.get('/', corporationController.getCorporation);

module.exports = router;