const Chats = require("./model");

module.exports.create = async (args) => {
  try {
    const createdChat = await Chats.create(args);
    return createdChat;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.get = async () => {
  try {
    const allChats = await Chats.find({});
    return allChats;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.delete = async ({ _id }) => {
  try {
    const deletedChat = await Chats.findByIdAndDelete({ _id });
    if (deletedChat) {
      return deletedChat;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.update = async ({ _id, title }) => {
  try {
    const updatedChat = await Chats.findByIdAndUpdate(
      _id,
      { title },
      { new: true }
    );
    return updatedChat;
  } catch (error) {
    throw new Error(error);
  }
};
