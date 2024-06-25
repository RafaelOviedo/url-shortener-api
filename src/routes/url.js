const { Router } = require('express');
const router = Router();
const url = require('../controllers/url');

router.get('/', url.getAllUrls);

router.post('/shorten', url.createShortUrl);

module.exports = router;