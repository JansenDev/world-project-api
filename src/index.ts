require('dotenv').config();
import { createApolloServer } from "./server";
// import express from "express";
// import bodyParser from "body-parser";
// import morgan from "morgan";
// import cors from "cors";
import app from "./app";
import http from "http";

// // pool
// const app = express();
const PORT_API = process.env.PORT || 3000;
const PORT_GRAPHQL = process.env.PORT || 4000;

const startServer = async () => {
    const httpServer = http.createServer(app)
    const apolloServer = createApolloServer()
    await apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        path: ''
    })

    await new Promise<void>((resolve) => {
        httpServer.listen({ port: PORT_GRAPHQL }, resolve)
    })
    console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`);
}
startServer();


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(morgan("tiny"));
// app.use(cors());

// app.use(routes)





// app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
