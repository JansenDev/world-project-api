import { ApolloError, ApolloServer, gql } from "apollo-server-express";
import { resolvers } from "./graphql/resolver";
import { typeDefs } from "./graphql/schema";

const apolloErrorFormatter = (error: any) => {

    const { originalError } = error;
    const isGraphQLError = !(originalError instanceof Error);

    let normalizedError = new ApolloError(
        'Something went wrong',
        'INTERNAL_SERVER_ERROR',
    );

    if (error.originalError instanceof ApolloError || isGraphQLError) {
        normalizedError = error;
    }

    return normalizedError;
};



const createApolloServer = () => new ApolloServer({
    resolvers,
    typeDefs,
    formatError: apolloErrorFormatter,
    context: ({ req, res }) => {
        // console.log("body => ", req.body);
        // console.log("headers => ", req.headers);


    }
})

export { createApolloServer }