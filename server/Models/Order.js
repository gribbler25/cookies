const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  cookies: {
    type: Array,
    required: true,
  },
  //this is either small, medium, or large order subscription.
  orderType: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  //this is stored as the number of cents, converted to decimal with get and set(below)
  orderTotal: {
    type: Number,
    required: true,
    get: getPrice,
    set: setPrice,
  },
});

function getPrice(num) {
  return (num / 100).toFixed(2);
}
function setPrice(num) {
  return num * 100;
}

const Order = model("Order", orderSchema);

module.exports = Order;
