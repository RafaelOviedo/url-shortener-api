const { Router } = require('express');
const router = Router();
const shortenRouter = require("./shorten");
const usersRouter = require("./users");
const authRouter = require("./auth");

router.get('/', (req, res) => {
  res.send('Hello url-shortener-api');
});

router.use('/auth', authRouter);
router.use('/shorten', shortenRouter);
router.use('/users', usersRouter);

router.get('*', (req, res) => {
  res.status(404).send('Not Found');
})

module.exports = router;