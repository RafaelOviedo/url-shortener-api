const { Router } = require('express');
const router = Router();
const user = require('../controllers/user');

router.get('/', user.getAllUsers);

router.post('/', user.createUser);

module.exports = router;