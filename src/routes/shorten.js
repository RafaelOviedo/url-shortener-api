const { Router } = require('express');
const router = Router();
const url = require('../controllers/url');

router.post('/', url.createShortUrl);

module.exports = router;