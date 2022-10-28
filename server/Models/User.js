const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
// const reviewSchema = require("./Review.js");

const userSchema = new Schema(
  {
    //don't know if I need to state this _id explicitly as ObjectId that others will reference
    // _id: {
    //   type: Schema.Types.ObjectId,
    //   required: true,
    //   unique: true,
    // },
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
    //reviews and orders included (.poulate) when user queries themselves for their dashboard page...?
    reviews: [{ type: Schema.Types.ObjectId, ref: "reviews" }],
    subscription: { type: Schema.Types.ObjectId, ref: "subscriptions" },
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
