const { Schema, model } = require("mongoose");

const cookieSchema = new Schema({
  image: {
    type: Image,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  //we can just put Wheat, Dairy, Egg, Peanut, Soy, and Tree nut here as applicable
  allergens: {
    type: String,
    required: true,
  },
  reviews: {
    type: Array,
    unique: true,
  },
});

const Cookie = model("cookie", cookieSchema);

module.exports = Cookie;
