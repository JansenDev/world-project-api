import { ApolloServer, gql } from "apollo-server-express";


const createApolloServer = () => new ApolloServer({
    resolvers: {
        Query: {
            greeting: () => null,
        }
    },
    typeDefs: gql`
    type Query {
    greeting: Boolean
    }
    `,
})

// server.listen({ port: process.env.PORT || 4000 }).then(res => { pool; console.log(`Apollo server ON!`, res.url) })

export { createApolloServer }