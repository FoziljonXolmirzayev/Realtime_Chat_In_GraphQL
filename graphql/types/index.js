const { gql } = require("apollo-server-core");
const mutations = require("./mutations");
const userType = require("../modules/user/type");
const queries = require("./queries");
const messageType = require("../modules/message/type");
const chatType = require("../modules/chat/type");
const types = gql`
  ${mutations}
  ${queries}
  ${userType}
  ${messageType}
  ${chatType}
`;

module.exports = types;
