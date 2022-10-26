const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
//this user input opportunity coming from the single cookie page so we already have the id of current cookie selected?
const reviewSchema = new Schema(
  {
    //name comes from the clicked cookie's name property
    cookieName: {
      type: Schema.Types.ObjectId,
      ref: "Cookie",
    },
    //comes from the logged in user's userName
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    //input from a textbox
    reviewText: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
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
