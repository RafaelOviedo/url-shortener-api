const UrlSchema = require('../models/Url');
const { generateRandomShortUrl } = require('../utils/generateRandomShortUrl');

const Url = {
  getAllUrls: async (req, res) => {
    const { userId } = req.query;

    try {
      let query = {};

      if (userId) { query = { userId: userId }; }

      const urls = await UrlSchema.find(query);

      res.status(200).send({ totalQty: urls.length, urls: urls })
    }
    catch (error) {
      res.status(500).send("Internal Server Error");
    }
  },
  getShortUrl: async (req, res) => {
    const { shortUrlId } = req.params;

    const foundUrl = await UrlSchema.findOne({ shortUrlId: shortUrlId })
    const longUrl = foundUrl.longUrl;

    res.redirect(302, longUrl);
  },
  createShortUrl: async (req, res) => {
    const { userId } = req.body;
    const shortUrl = await generateRandomShortUrl();
    Object.assign(req.body, { shortUrl: `http://localhost:3001/${shortUrl}`, shortUrlId: shortUrl });

    const url = new UrlSchema(req.body);

    if (userId) {
      await url.save();
    }

    res.status(201).send(url);
  }
}

module.exports = Url;