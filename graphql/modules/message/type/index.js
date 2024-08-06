const { gql } = require("apollo-server-core");
const messageType = gql`
  type Message {
    _id: String
    message: String
    sender: String
    receiver: String
    sendedAt: String
  }
`;
module.exports = messageType;
