const { Schema, model } = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const messageSchema = new Schema({
  message: String,
  sender: { type: Schema.Types.ObjectId, ref: "Users" },
  receiver: { type: Schema.Types.ObjectId, ref: "" },
  sendedAt: { type: Date, default: Date.now },
  //   isRead: Boolean,
});
messageSchema.plugin(paginate);

const Messages = model("Messages", messageSchema);
module.exports = Messages;
