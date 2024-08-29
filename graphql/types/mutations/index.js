const { gql } = require("apollo-server-core");
const mutations = gql`
  type Mutation {
    createUser(name: String!, password: String!): User

    updateUser(_id: ID!, name: String!, password: String!): User

    deleteUser(_id: ID!): User

    createMessage(message: String!, sender: ID!, receiver: ID!): Message

    deleteMessage(_id: ID!): Message

    updateMessage(_id: ID!, message: String!): Message

    createChat(title: String!, receiver: String!, sender: String!): Chat

    deleteChat(_id: String!): Chat

    updateChat(_id: String!, title: String!): Chat

    signUp(name: String!, password: String!): signUpOutPut

    login(name: String!, password: String!): User
  }
`;
module.exports = mutations;
