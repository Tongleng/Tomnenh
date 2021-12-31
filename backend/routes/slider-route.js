const express = require('express');
const sliderController = require('../controllers/slider-controller')

const router = express();

router.get('/', sliderController.getSlider);
router.post('/', sliderController.createSlider);
router.patch('/:sid', sliderController.updateSlider);
router.delete('/:sid', sliderController.deleteSlider);

module.exports = router;