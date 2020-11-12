const {gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
type Post {
  id: ID!
  title: String!
  votes: Int!
  author: User!
  voters:[User]
}

type User {
  name: ID!
  posts: [Post]
}

type Query {
  posts: [Post]
  users: [User]
}

type Mutation {
  write(post: PostInput!): Post

  # 🚀 OPTIONAL
  # delete(id: ID!): Post

  # ⚠️ FIXME in exercise #4
  # mock voter until we have authentication
  upvote(id: ID!, voter: UserInput!): Post

  # 🚀 OPTIONAL
  # downvote(id: ID!, voter: UserInput!): Post
}

input PostInput {
  title: String!

  # ⚠️ FIXME in exercise #4
  # mock author until we have authentication
  author: UserInput!
}

input UserInput {
  name: String!
}
`;

module.exports = typeDefs