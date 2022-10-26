const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Cookie, Subscription, Review } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("reviews")
          .populate("cookies");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    // // get all users
    // // replaced thoughts with reviews and friends with cookies
    // only query in typedefs is me

    // users: async () => {
    //     return User.find()
    //         .select('-__v -password')
    //         .populate('cookies')
    //         .populate('reviews');
    // },
    // // get a user by username
    // user: async (parent, { username }) => {
    //     return User.findOne({ username })
    //         .select('-__v -password')

    //         .populate('cookies')
    //         .populate('reviews');
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    removeCookie: async (parent, arg, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedCookies: { cookieid: args.cookieId } } },
          // { $pull: { savedCookies: { bookid: args.bookId } } },
          { new: true }
        );
        return updatedUser;
      }
    },

    addCookie: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedCookies: args } },
          { new: true }
        );
        return updatedUser;
      }
    },
  },
};

module.exports = resolvers;
