const { gql } = require("apollo-server-core");

const userType = gql`
  type User {
    _id: String
    name: String
    password: String
  }
`;

module.exports = userType;
