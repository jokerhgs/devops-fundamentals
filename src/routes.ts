import { Router } from "express";
import userRoutes from "./users/user-routes.ts";

const router: Router = Router();

router.use("/users", userRoutes);

export default router;
