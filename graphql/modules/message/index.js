const Messages = require("./model");

module.exports.create = async (args) => {
  try {
    const createdMessage = await Messages.create(args);
    return createdMessage;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.get = async () => {
  try {
    const messages = await Messages.find({});
    return messages;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.delete = async ({ _id }) => {
  try {
    const deletedMessage = await Messages.findByIdAndDelete(_id);
    return deletedMessage;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.update = async ({ _id, message }) => {
  try {
    const updatedMessage = await Messages.findByIdAndUpdate(
      _id,
      { message },
      { new: true }
    );
  } catch (error) {
    throw new Error(error);
  }
};
