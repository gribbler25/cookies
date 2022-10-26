const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const orderSchema = new Schema(
  //push cookie names to cookiesIncluded Array as a part of ordering process from a list of options on order page?
  {
    savedCookies: [cookieSchema],
    //this is either small(12), medium(24), or large(36) order box monthly subscription, comes from selection dropdown
    orderSize: {
      type: String,
      required: true,
      enum: ["Small", "Medium", "Large"],
      default: "Medium",
    },
    //subscription options comes from a selection dropdown on the order page?(too complicated for now)
    // frequency: {
    //   type: String,
    //   required: true,
    //   enum: ["Bi-Monthly , Monthly, Every-Three-Months"],
    // },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    //this comes from the price assoc with the 3 supbscription types and is stored as the number of cents, converted to decimal with get and set(below)
    orderTotal: {
      type: Number,
      required: true,
      get: getPrice,
      set: setPrice,
    },
  },
  {
    toJSON: {
      getters: true,
      setters: true,
    },
  }
);

function getPrice(num) {
  return (num / 100).toFixed(2);
}
function setPrice(num) {
  return num * 100;
}

const Order = model("orders", orderSchema);

module.exports = Order;
