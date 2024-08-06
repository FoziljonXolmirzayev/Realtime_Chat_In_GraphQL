const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { ApolloServer } = require("apollo-server");
const resolvers = require("./modules");
const types = require("./types");

const server = new ApolloServer({
  resolvers: resolvers,
  typeDefs: types,
  context: function (params) {
    return {};
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

module.exports = server;
