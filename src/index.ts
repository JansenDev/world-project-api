require('dotenv').config();
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import { routes } from "./api/";
import pool from "./api/db/pool";

pool
const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors());

app.use(routes)





app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
