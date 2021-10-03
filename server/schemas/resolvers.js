const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  // get a single user by ID or username
  Query: {
    user: async (parent, args) => {
      return await User.findById(args.id);
    },
  },

  // update
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const newUser = await User.create({ name, email, password });
      const token = signToken(newUser);

      return { token, newUser };
    },
    login: async (parent, { email, password }) => {
      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await existingUser.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(existingUser);
      return { token, existingUser };
    },
  },
};

module.exports = resolvers;
