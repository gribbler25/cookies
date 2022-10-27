const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const cookieSchema = require("./Cookie.js");
const subscriptionSchema = new Schema(
  //push cookie names to cookiesIncluded Array as a part of ordering process from a list of options on order page?
  {
    savedCookies: [{ type: Schema.Types.ObjectId, ref: "cookies" }],
    //this is either small(12), medium(24), or large(36) order box monthly subscription, comes from selection dropdown
    boxSize: {
      type: String,
      required: true,
      enum: ["Small", "Medium", "Large"],
      default: "Medium",
    },

    createdAt: {
      type: String,
      default: () => new Date().toISOString(),
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    //this comes from the price assoc with the 3 supbscription types and is stored as the number of cents, converted to decimal with get and set(below)
    total: {
      type: String,
      required: true,
      // get: getPrice,
      // set: setPrice,
    },
  }
  // {
  //   toJSON: {
  //     getters: true,
  //     setters: true,
  //   },
  // }
);

// function getPrice(num) {
//   return (num / 100).toFixed(2);
// }
// function setPrice(num) {
//   return num * 100;
// }

const Subscription = model("subscriptions", subscriptionSchema);

module.exports = Subscription;
