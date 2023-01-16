const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  console.log("Your API is Running");
});
