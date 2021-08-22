import { Router } from "express";
import { testRoute } from "./test";

const router = Router();

router.use("/test", testRoute);

export default router;
