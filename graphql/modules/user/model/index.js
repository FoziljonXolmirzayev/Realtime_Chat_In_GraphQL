const { Schema, model } = require("mongoose");
const paginate = require("mongoose-paginate-v2");
const { hashPassword } = require("../../../../services/bcrypt");

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function () {
  this.password = await hashPassword(this.password);
});

userSchema.plugin(paginate);
const Users = model("User", userSchema);
module.exports = Users;
