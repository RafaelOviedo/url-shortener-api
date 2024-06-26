const UserSchema = require('../models/User');

const User = {
  getAllUsers: async (req, res) => {
    try {
      const users = await UserSchema.find();
  
      res.status(200).send(users);
    } 
    catch (error) {
      res.status(500).send({ message: 'Internal Server Error', error })
    }
  },
  createUser: async (req, res) => {
    const { email } = req.body;

    try {
      const user = new UserSchema(req.body);

      const userExists = await UserSchema.findOne({ email: email })

      if (!userExists) {
        const savedUser = await user.save();
        res.status(201).send(savedUser);
      }
      else {
        return res.status(409).send({ message: 'User already exists', code: 409 })
      }
    } 
    catch (error) {
      res.status(500).send({ message: 'Internal Server Error', error })
    }
  }
}

module.exports = User;