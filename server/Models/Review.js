const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
//this user input opportunity coming from the single cookie page so we already have the id of current cookie selected?
const reviewSchema = new Schema(
  {
    cookieType: {
      type: Schema.Types.ObjectId,
      ref: "cookies",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },
    //input from a textbox
    reviewText: {
      type: String,
      required: true,
      trim: true,
    },
    created_at: {
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
