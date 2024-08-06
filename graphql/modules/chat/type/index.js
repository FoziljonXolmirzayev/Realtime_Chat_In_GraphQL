const { gql } = require("apollo-server-core");
const chatType = gql`
  type Chat {
    _id: String
    title: String
    receiver: String
    sender: String
  }
`;
module.exports = chatType;
