const express = require('express')
const googleMapController = require('../controllers/google-map-controller')

const router = express();

router.get('/', googleMapController.getGoogleMap);

module.exports = router;
