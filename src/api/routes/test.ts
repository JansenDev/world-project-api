import { Router } from "express";
import { collectionServiceInstance } from "../../shared/service/collection.service";


const route = Router()

route.get("/", async (req, res, next) => {
    console.log("REQ: ", req.body);
    const { offset, limit } = req.body
    const data = await collectionServiceInstance.getCollectionPaginated(offset, limit)
    console.log(data);

    res.send({ message: "hello world", data });
});


export { route as testRoute };