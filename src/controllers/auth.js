const UserSchema = require('../models/User');

const Auth = {
  getAuthUser: async (req, res) => {
    const { email } = req.body;

    try {
      const authUser = await UserSchema.find({ email: email })
      res.status(200).send(authUser);
    }
    catch (error) {
      res.status(500).send({ message: 'Internal Server Error', error })
    }
  }
}

module.exports = Auth;