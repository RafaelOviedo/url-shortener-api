const { Router } = require('express');
const router = Router();
const auth = require('../controllers/auth');

router.post('/', auth.getAuthUser);

module.exports = router;