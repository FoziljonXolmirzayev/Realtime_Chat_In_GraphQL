const user = require("./user");
const message = require("./message");
const chat = require("./chat");
const auth = require("../auth");

const resolvers = {
  Query: {
    getUsers(_, args, context) {
      return user.get(args, context);
    },
    getMessages(_, args, context) {
      return message.get(args, context);
    },
    getChats(_, args, context) {
      return chat.get(args, context);
    },
  },
  Mutation: {
    createUser(_, args, context) {
      return user.create(args, context);
    },
    updateUser(_, args, context) {
      return user.update(args, context);
    },
    deleteUser(_, args, context) {
      return user.delete(args, context);
    },
    createMessage(_, args, context) {
      return message.create(args, context);
    },
    deleteMessage(_, args, context) {
      return message.delete(args, context);
    },
    updateMessage(_, args, context) {
      return message.update(args, context);
    },
    createChat(_, args, context) {
      return chat.create(args, context);
    },
    deleteChat(_, args, context) {
      return chat.delete(args, context);
    },
    updateChat(_, args, context) {
      return chat.update(args, context);
    },
    signUp(_, args, context) {
      return auth.signUp(args, context);
    },
    login(_, args, context) {
      return auth.login(args, context);
    },
  },
};
module.exports = resolvers;
