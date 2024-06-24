// const 

const Url = {
  createShortUrl: async (req, res) => {
    res.status(201).send('Url Created');
  }
}

module.exports = Url;