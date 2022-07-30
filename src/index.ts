require('dotenv').config();
import { createApolloServer } from "./server";
import app from "./app";
import http from "http";
import pool from "./shared/db/pool";

const PORT_GRAPHQL = process.env.PORT || 4000;

const startServer = async () => {
    const httpServer = http.createServer(app)

    const apolloServer = createApolloServer()
    await apolloServer.start();

    apolloServer.applyMiddleware({
        app,
        path: '/',
    })

    await new Promise<void>((resolve) => {
        httpServer.listen({ port: PORT_GRAPHQL }, resolve)
        pool
    })
    console.log(`🚀 Server ready at http://localhost:${PORT_GRAPHQL}${apolloServer.graphqlPath}`);
}
startServer();
