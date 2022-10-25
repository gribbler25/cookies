const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  reviewText: {
    type: String,
    required: true,
    unique: true,
  },
});

const Review = model("review", reviewSchema);

module.exports = Review;
