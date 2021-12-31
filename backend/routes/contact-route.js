const express = require('express')
const contactController = require('../controllers/contact-controller')

const router = express();

router.get('/', contactController.getContact);
router.delete('/:cid', contactController.deleteContact);

module.exports = router;
