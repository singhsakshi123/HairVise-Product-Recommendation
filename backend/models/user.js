const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  history: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
      },
    },
  ],
  token: {
    type: String,
  },
});

UserSchema.pre("save", async function (next) {
  var user = this;
  if (this.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

UserSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id, email: this.email, name: this.name },
      process.env.JWT_KEY
    );
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongoose.model("User", UserSchema);
