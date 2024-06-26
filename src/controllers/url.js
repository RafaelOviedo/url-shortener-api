const UrlSchema = require('../models/Url');
const { generateRandomShortUrl } = require('../utils/generateRandomShortUrl');

const Url = {
  getAllUrls: async (req, res) => {
    const { userId } = req.query;

    try {
      let query = {};

      if (userId) {
        query.userId = userId;
      } 
      else {
        query.userId = { $exists: false };
      }

      const urls = await UrlSchema.find(query);

      res.status(200).send({ totalQty: urls.length, urls: urls });
    }
    catch (error) {
      res.status(500).send({ message: 'Internal Server Error', error });
    }
  },
  getShortUrl: async (req, res) => {
    const { shortUrlId } = req.params;

    try {
      const foundUrl = await UrlSchema.findOne({ shortUrlId: shortUrlId });
      const longUrl = foundUrl.longUrl;
      await foundUrl.clicks++;
      await foundUrl.save();

      res.redirect(302, longUrl);
    } 
    catch (error) {
      res.status(500).send({ message: 'Internal Server Error', error });
    }    
  },
  createShortUrl: async (req, res) => {
    try {
      const shortUrl = await generateRandomShortUrl();
      Object.assign(req.body, { shortUrl: `https://liturl.vercel.app/${shortUrl}`, shortUrlId: shortUrl });
  
      const url = new UrlSchema(req.body);
        
      await url.save();
  
      res.status(201).send(url);
    } 
    catch (error) {
      res.status(500).send({ message: 'Internal Server Error', error });
    }
  }
}

module.exports = Url;