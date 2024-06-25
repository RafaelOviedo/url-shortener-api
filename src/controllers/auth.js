const UserSchema = require('../models/User');

const Auth = {
  getAuthUser: async (req, res) => {
    const { email } = req.body;

    const authUser = await UserSchema.find({ email: email })
    res.status(200).send(authUser);
  }
}

module.exports = Auth;