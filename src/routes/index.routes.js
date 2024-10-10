import { Router } from "express"
const routes = Router()

import rappersRoutes from "./rappers.routes.js";

routes.get("/", (req, res) => {
    return res.status (200).send({ message: ""})
}) 

routes.use ("/suspeitos", suspeitosRoutes)
export default routes