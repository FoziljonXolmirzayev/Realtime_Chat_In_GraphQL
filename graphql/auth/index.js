const { comparePassword } = require("../../services/bcrypt");
const { generateToken } = require("../../services/jwt");
const Users = require("../modules/user/model");

module.exports.signUp = async ({ name, password }) => {
  try {
    const foundUser = await Users.findOne({ name });
    if (foundUser) {
      return "This username already exist! Choose another one !";
    }
    const createdUser = await Users.create({ name, password });
    const token = generateToken({ uid: createdUser._id });
    return { createdUser, token };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.login = async ({ name, password }) => {
  try {
    const foundUser = await Users.findOne({ name });
    if (!foundUser) {
      return "User not found !";
    }
    const isPassMatch = await comparePassword(foundUser.password, password);
    if (isPassMatch) {
      const newToken = generateToken({ iud: foundUser._id });
      return { name: foundUser.name, token: newToken };
    } else {
      return "Unauthorized !";
    }
  } catch (error) {
    throw new Error(error);
  }
};
