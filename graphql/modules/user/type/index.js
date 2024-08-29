const { gql } = require("apollo-server-core");

const userType = gql`
  type User {
    _id: String
    name: String
    password: String
  }
  type signUpOutPut {
    createdUser: User
    token: String
  }
`;

module.exports = userType;
