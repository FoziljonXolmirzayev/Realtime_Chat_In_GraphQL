const Users = require("./model");

module.exports.create = async (args) => {
  try {
    const createdUser = await Users.create(args);
    return createdUser;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.get = async () => {
  try {
    const usersInfo = await Users.find({});
    return usersInfo;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.update = async ({ _id, name, password }) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      _id,
      { name, password },
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.delete = async ({ _id }) => {
  try {
    const deletedUser = await Users.findByIdAndDelete(_id);
    return deletedUser;
  } catch (error) {
    throw new Error(error);
  }
};
