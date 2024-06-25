const UserSchema = require('../models/User');

const User = {
  getAllUsers: async (req, res) => {
    const users = await UserSchema.find();

    res.status(200).send(users);
  },
  createUser: async (req, res) => {
    const user = new UserSchema(req.body);
    const savedUser = await user.save();

    res.status(201).send(savedUser);
  }
}

module.exports = User;