const {gql} = require('apollo-server');

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    votes: Int!
    author: User!
  }

  type User {
    # ⚠️ attributes 'id' and 'name' have changed!
    # 'id' now represents a randomly generated string, similar to 'Post.id'
    id: ID!
    name: String!
    email: String!
    posts: [Post]
  }

  type Query {
    posts: [Post]
    users: [User]
  }

  type Mutation {
    write(post: PostInput!): Post
    upvote(id: ID!): Post
    downvote(id: ID!): Post
    delete(id: ID!): Post

    """
    returns a signed JWT or null
    """
    login(email: String!, password: String!): String

    """
    returns a signed JWT or null
    """
    signup(name: String!, email: String!, password: String!): String
  }

  input PostInput {
    title: String!
  }
`;

module.exports = typeDefs