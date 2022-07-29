import { Router } from "express";
import { testRoute } from "./routes/test";

const routeTemp = Router();
const route = Router();

routeTemp.use(testRoute)


route.use('/api', routeTemp);

export { route as routes }