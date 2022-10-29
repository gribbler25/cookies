const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Cookie, Order } = require("../models");

const resolvers = {
  Query: {
    getUsers: async () => {
     return User.find()
     .select("-__v -password");

    },
    getMe: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        // .populate("reviews")
        // .populate("subscriptions");
        console.log(userData);

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    getCookie: async (parent, args) => {
      const cookie = await Cookie.findOne({ cookieName: args.cookieName }); //cookieName needs to match the name clicked on ??
      return cookie;
    },
    getCookies: async (parent) => {
      const cookies = await Cookie.find({});
      return cookies;
    },
  },

        // }
        // // get all users
        // // replaced thoughts with reviews and friends with cookies 
        // only query in typedefs is me
        //is users and user needed?
        
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

    //button takes you to order page on front end, then submit button on order page form uses createOrder to push all the data into a new Order in the database and find the associated user to push to their orders array.
    createOrder: async (parent, args, context) => {
      console.log(context.user);
      const newOrder = await Order.create({
        ...args,
        username: context.user.username,
      });
      await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { orders: newOrder } },
        { new: true }
      );
      return newOrder;
    },

    //this is to put cookies inthe DB!
    createCookie: async (
      parent,
      { cookieName, description, allergens, reviews }
    ) => {
      const newCookie = await Cookie.create({
        cookieName,
        description,
        allergens,
        reviews,
      });
      return newCookie;
    },

    //front end function needs to call the current cookie 'cookieName' somehow, so it can be found in the DB by saying cookieName: cookieName below...
    addReview: async (parent, args) => {
      const updatedCookie = await Cookie.findOneAndUpdate(
        { cookieName: cookieName },
        { $push: { reviews: args } },
        { new: true }
      );
      return updatedCookie;
    },
  },
};
module.exports = resolvers;
