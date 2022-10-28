const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
//this user input opportunity coming from the single cookie page so we already have the id of current cookie selected?
const reviewSchema = new Schema(
  {
    //name comes from the clicked cookie's name property to (.populate) with review query?
    cookieReviewed: {
      type: Schema.Types.ObjectId,
      ref: "cookies",
    },
    //comes from the logged in user's username
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    //input from a textbox
    reviewText: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: String,
      default: () => new Date().toISOString(),
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Review = model("reviews", reviewSchema);

module.exports = Review;
