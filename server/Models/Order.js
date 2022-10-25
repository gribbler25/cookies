const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const orderSchema = new Schema(
  //push cookie names to cookiesIncluded Array as a part of ordering process?
  {
    cookiesIncluded: {
      type: Array,
      required: true,
    },
    //this is either small, medium, or large order subscription.
    orderType: {
      type: String,
      required: true,
      enum: ["Small", "Medium", "Large"],
      default: "Medium",
    },
    //data comes from a selection on the screen?
    frequency: {
      type: String,
      required: true,
      enum: ["Bi-Monthly, Monthly, Every-Three-Months"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    //this is stored as the number of cents, converted to decimal with get and set(below)
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
