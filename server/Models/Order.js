const { Schema, model } = require("mongoose");
// const dateFormat = require("../utils/dateFormat");
const cookieSchema = require("./Cookie.js");
const orderSchema = new Schema({
  // savedCookies: [{ type: Schema.Types.ObjectId, ref: "cookies" }],
  cookies: [String],

  //assigning the logged in user's _id to this property, can it be a string?
  user_id: {
    type: String,
    required: true,
  },

  //this could just be how many dozen cookies.. one, two, three etc
  total: {
    type: String,
    required: true,
  },
});

const Order = model("orders", orderSchema);

module.exports = Order;
