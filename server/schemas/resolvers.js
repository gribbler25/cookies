const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Cookie, Order, Review } = require("../models");
const { isObjectIdOrHexString } = require("mongoose");

const resolvers = {
  Query: {
    getUsers: async () => {
      const users = await User.find({})
        .select("-__v -password")
        .populate("orders");

      return users;
    },
    getMe: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("orders");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    getCookie: async (parent, args) => {
      const cookie = await Cookie.findOne({ cookieName: args.cookieName }); //cookieName needs to match the name clicked on ??
      console.log(cookie);
      return cookie;
    },
    getCookies: async (parent) => {
      const cookies = await Cookie.find({});
      console.log(cookies);
      return cookies;
    },
    getReviews: async (parent) => {
      const reviews = await Review.find({})
      console.log(reviews);
      return reviews;
    }
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

    //submit button on order page form uses createOrder to push all the data into a new Order in the database and find the associated user to push order's ID to their orders array.
    createOrder: async (parent, args, context) => {
      if (context.user) {
        const newOrder = await Order.create({
          ...args,
          email: context.user.email,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { orders: newOrder } },
          { new: true }
        );

        return newOrder;
      }
      throw new AuthenticationError("Not logged in");
    },

    addReview: async (parent, { cookienameId, reviewText }, context) => {
      if (context.user) {
        const updatedCookie = await Cookie.findOneAndUpdate(
          { cookieName: cookienameId }, //does Mongo assign an ObjectId whenever we need to findOneAndUpdate by some property?
          {
            $push: {
              reviews: { reviewText, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );

        return updatedCookie;
      }
      throw new AuthenticationError("Not logged in");
    },
    //this is to put cookies in and delete from the DB!
    createCookie: async (
      parent,
      { cookieName, description, allergens, username }
    ) => {
      const newCookie = await Cookie.create({
        cookieName,
        description,
        allergens,
        // reviews,
        username,
      });
      return newCookie;
    },

    deleteCookie: async (parent, args) => {
      console.log(args);
      await Cookie.findOneAndDelete({ cookieName: args.cookieName });
      return;
    },
    ///
  },
};
module.exports = resolvers;
