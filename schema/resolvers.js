const { UserList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
    user(parent, args) {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    movies() {},
    movie() {},
  },
};

module.exports = { resolvers };
