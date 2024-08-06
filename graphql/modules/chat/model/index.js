const { Schema, model } = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const chatSchema = new Schema({
  title: String,
  receiver: { type: Schema.Types.ObjectId, ref: "User" },
  sender: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});
chatSchema.plugin(paginate);

const Chats = model("Chat", chatSchema);
module.exports = Chats;
