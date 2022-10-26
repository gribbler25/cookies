const { Schema, model } = require("mongoose");

const cookieSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  //cookie_id can reference both orders and reviews.. got this syntax from a Googlesearch
  // cookie_id: {
  //   type: Schema.Types.ObjectId,
  //   references: { type: [Schema.Types.ObjectId], refPath: "model_type" },
  //   model_type: { type: String, enum: ["orders", "reviews"], required: true },
  // },
  image: {
    type: Image,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  //we can just put Wheat, Dairy, Egg, Peanut, Soy, and Tree nut here as applicable when add cookie to DB
  allergens: {
    type: Array,
  },
  //need all the reviews with this cookieType's _id
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});

const Cookie = model("cookies", cookieSchema);

module.exports = Cookie;
