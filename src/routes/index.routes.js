import { Router } from "express";

import rappersRoutes from "./rappers.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status (200).json({ message: "eu me amo"})
});

routes.use ("/rappers", rappersRoutes);

export default routes;