const express = require('express');
const serviceController = require('../controllers/service-controller');

const router = express();

router.get('/', serviceController.getService);
router.delete('/:sid', serviceController.deleteService);

module.exports = router;
