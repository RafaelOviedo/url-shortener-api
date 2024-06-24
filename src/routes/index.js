const { Router } = require('express');
const router = Router();
const shortenRouter = require("./shorten");

router.get('/', (req, res) => {
  res.send('Hello url-shortener-api');
});

router.use('/shorten', shortenRouter);

router.get('*', (req, res) => {
  res.status(404).send('Not Found');
})

module.exports = router;