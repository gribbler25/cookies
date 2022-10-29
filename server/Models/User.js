const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
// const reviewSchema = require("./Review.js");
//const orderSchema = require("./Order");
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    // //reviews and orders included (.poulate) when user queries themselves for their dashboard page...?
    // reviews: [{ type: Schema.Types.ObjectId, ref: "reviews" }],
    // subscription: {
    //   type: Boolean,
    // },
    //this sets orders to be an array of data adhearing to the order schema
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order"
      }
    ],
  },

  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("user", userSchema);

module.exports = User;
