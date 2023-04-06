const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);

userModel.methods.matchPassword = async function (enteredPassword) {
  console.log("ENTERED PASSWORD", typeof enteredPassword);
  console.log("DOCUMENT PASSWORD!!", typeof this.password);
  const compare = await bcrypt.compare(enteredPassword, this.password);
  console.log("COMPARE!!!", compare);
  return compare;
};

userModel.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userModel);

module.exports = User;
