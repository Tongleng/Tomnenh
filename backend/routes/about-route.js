const express = require('express')
const aboutController = require('../controllers/about-controller')

const router = express();

router.get('/', aboutController.getAbout);

module.exports = router;
