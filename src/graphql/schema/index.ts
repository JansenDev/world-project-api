import { gql } from "apollo-server-express"

const typeDefs = gql`
    type Query {
    greeting: Boolean
    },
    `


export { typeDefs }