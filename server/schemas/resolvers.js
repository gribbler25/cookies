const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Cookie, Subscription, Review } = require("../models");

const resolvers = {
  Query: {
    getMe: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("reviews")
          .populate("subscriptions");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    getCookie: async (parent, { cookieName }) => {
      const cookie = await Cookie.findOne({ cookieName }); //cookieName needs to match the name clicked on ??
      return cookie;
    },
    getCookies: async (parent) => {
      const cookies = await Cookie.find({});
      return cookies;
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
    removeCookie: async (parent, { cookieName }, context) => {
      if (context.user) {
        const updatedSubscription = await Subscription.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedCookies: { cookieName } } },
          { new: true }
        );
        return updatedSubscription;
      }
    },

    addCookie: async (parent, { cookieName }, context) => {
      if (context.user) {
        const updatedSubscription = await Subscription.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedCookies: { cookieName } } },
          { new: true }
        );
        return updatedSubscription;
      }
    },
    //this is to put cookies inthe DB!
    createCookie: async (parent, args) => {
      const newCookie = await Cookie.create({
        cookieName: cookieName,
        image: image,
        description: description,
        allergens: allergens,
      });
      return newCookie;
    },
  },
};

module.exports = resolvers;
