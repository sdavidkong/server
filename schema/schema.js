const graphql = require("graphql");
const lodash = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;

var books = [
  { name: "Ash", genre: "Trainer", id: "1" },
  { name: "Pikachu", genre: "Pokemon", id: "2" },
  { name: "Brock", genre: "Trainer", id: "3" },
];

var authors = [
  { name: "Boob", age: 44, id: "1" },
  { name: "Wooter", age: 33, id: "2" },
  { name: "Hazmat", age: 22, id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return lodash.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return lodash.find(author, { id: args.author });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
