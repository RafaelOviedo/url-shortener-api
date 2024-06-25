const { Router } = require('express');
const router = Router();
const urlRouter = require("./url");
const usersRouter = require("./users");
const authRouter = require("./auth");

const url = require('../controllers/url');

router.get('/', (req, res) => {
  res.send('Hello url-shortener-api');
});

router.use('/auth', authRouter);
router.use('/url', urlRouter);
router.use('/users', usersRouter);

router.get('/:shortUrlId', url.getShortUrl);

router.get('*', (req, res) => {
  res.status(404).send('Not Found');
})

module.exports = router;