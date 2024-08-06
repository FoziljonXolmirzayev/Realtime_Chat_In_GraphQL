const { gql } = require("apollo-server-core");
const queries = gql`
  type Query {
    getUsers: [User]

    getMessages: [Message]

    getChats: [Chat]
  }
`;
module.exports = queries;
