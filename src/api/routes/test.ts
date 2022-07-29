import { Router } from "express";

const route = Router()

route.get("/", (req, res, next) => {
    console.log("REQ: ", req.body);

    res.send({ message: "hello world", body: req.body });
});


export { route as testRoute };