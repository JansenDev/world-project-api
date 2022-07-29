require('dotenv').config();
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import { routes } from "./api";

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(morgan("tiny"));
app.use(cors());

app.use(routes)

export default app