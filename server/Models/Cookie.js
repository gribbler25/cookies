const { Schema, model } = require("mongoose");

const cookieSchema = new Schema({
  cookieName: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
    required: true,
    unique: true,
  },
  //we can just put Wheat, Dairy, Egg, Peanut, Soy, and Tree nut here as applicable when creating cookies in the DB
  allergens: [
    {
      type: String,
    },
  ],
  //addReview just pushes the text string to this array
  reviews: [
    {
      type: String,
    },
  ],
});

const Cookie = model("cookies", cookieSchema);

module.exports = Cookie;
