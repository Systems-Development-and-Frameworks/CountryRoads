//const mockedSchema = require('./utils/schemaMock');
const Server = require('../server');
const{ createTestClient }= require('apollo-server-testing');
const { ApolloServer, gql } =require( 'apollo-server');
let query;
let mutate;

jest.mock('../graphCms/schema');
jest.mock('../graphCms/executor');
jest.mock('../rootSchema');
jest.mock('../context');

let contextMock;


beforeEach(async () => {
    contextMock = {};
  const server = await Server(ApolloServer, { context: () => contextMock });
  const testClient = createTestClient(server);
  ({ query,mutate } = testClient);
});


describe("queries", () => {
    describe("USERS", () => {
        
        it("given users in the database", async () => {
            const PEOPLE = gql`
                {
                    people {
                        id
                        name
                    }
                }
            `;              
            await expect(query({ query: PEOPLE }))
                .resolves
                .toMatchObject({
                errors: undefined,
                data: {
                    people: [
                       { id: expect.anything(String), name: 'TestUser' },
                       { id: expect.anything(String), name: 'TestUser' },
                    ],
                },
                });
        })

        it("indefinitely nestable query", async () => {

            const gql_query = gql`
            {
                people {
                    id
                    name
                    email
                    posts {
                        title
                        author {
                            name
                        }
                    }
                }
            }
            `;
            await expect(query({ query: gql_query }))
            .resolves
            .toMatchObject({
              errors: undefined,
              data: {
                people:                
                [
                    {
                        id:"1", 
                        name:"TestUser", 
                        email:"testmail@gmail.com",
                        posts: [
                            {
                                title: "Mocktitle",
                                author: {
                                    name: "TestUser",
                                }
                            },
                            {
                                title: "Mocktitle",
                                author: {
                                    name: "TestUser",
                                }
                            }
                        ]
                    },
                    {
                        id:"1", 
                        name:"TestUser", 
                        email:"testmail@gmail.com",
                        posts: [
                            {
                                title: "Mocktitle",
                                author: {
                                    name: "TestUser",
                                }
                            },
                            {
                                title: "Mocktitle",
                                author: {
                                    name: "TestUser",
                                }
                            }
                        ]
                    }
               ]
              },
            });
        });
    });
});

describe("mutations", () => {

    describe("SIGN UP", () => {

        const SIGN_UP = gql`
            mutation ($name: String!, $email: String!, $password: String!){
                signup(name: $name, email: $email, password: $password)
            }
        `;


        const signup_action = (name, email, password, mutate) => {
            return mutate({
                mutation: SIGN_UP,
                variables: {
                        name,
                        email,
                        password
                }
            });
        };
        
        
        it("throws error if the password is too short", async () => {
            const response = signup_action(
                "TestUser2",
                "testUser2@gmail.com",
                "123",
                mutate
              );

            await expect(response)
            .resolves.toMatchObject({
                errors: [expect.objectContaining({ message: "Not Authorised!" })],
                data: {
                signup: null,
                },
            });
        })

        it("signs up new user", async () => {
            const response = signup_action(
                "Notexisting",
                "notexisting@gmail.com",
                "12345678",
                mutate
                );

            await expect(response)
            .resolves.toMatchObject({
                errors: undefined,
                data: {
                    signup: expect.any(String)
                },
            });
        });

        it("User already exist", async () => {
            const response = signup_action(
                "TestUser",
                "testmail@gmail.com",
                "12345678",
                mutate
            );

            await expect(response)
            .resolves.toMatchObject({
                errors: [expect.objectContaining({ message: "Email already exist"})],
                data: {
                    signup: null,
                },
            });
        });
    });

    describe("LOGIN", () => {

        const LOGIN = gql`
            mutation ($email: String!, $password: String!){
                login(email: $email, password: $password)
            }
        `;

        const login_action = ( email, password, mutate) => {
            return mutate({
                mutation: LOGIN,
                variables: {
                        email,
                        password
                    }
                });
        };

        it("login", async () => {
            const response = login_action(
                "testmail@gmail.com",
                "12345678",
                mutate
                );

            await expect(response)
            .resolves.toMatchObject({
                errors: undefined,
                data: {
                    login: expect.any(String)
                },
            });
        });

        it("throws error if credentials are wrong", async () => {
            const response = login_action(
                "notexisting@gmail.com",
                "12345678",
                mutate
              );
            
            await expect(response)
            .resolves.toMatchObject({
                errors: [expect.objectContaining({ message: "Wrong email/password combination" })],
                data: {
                    login: null,
                },
            });
        });
    });
})