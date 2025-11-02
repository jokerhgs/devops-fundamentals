import { Router } from "express";
import productsRoutes from "./products/products-routes.js";

const router: Router = Router();

router.use("/products", productsRoutes);

export default router;
