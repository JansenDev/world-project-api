import { ApolloServer, gql } from "apollo-server";


const server = new ApolloServer({
    // cache: 'bounded',
    // csrfPrevention: true,
    // cors: false,
    resolvers: {
        Query: {
            greeting: () => null,
        }
    },
    typeDefs: gql`
    type Query {
    greeting: Boolean
    }
    `
})

server.listen().then(res => console.log(`Apollo server ON!`, res.url))

export default () => server