const express = require('express');
const sociaMediaController = require('../controllers/social-media-controller')

const router = express();

router.get('/', sociaMediaController.getSocialMedia);
router.post('/', sociaMediaController.createSocialMedia);
router.patch('/:sid', sociaMediaController.updateSocialMedia);
router.delete('/:sid', sociaMediaController.deleteSocialMedia);

module.exports = router;