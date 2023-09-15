import { Router } from "express";
import { adminRouter } from "./admin.js";
import { productRouter } from "./product.js";
import { handleToken } from "../middlewares/adminAuth.js";

export const apiRouter = Router();

apiRouter.use("/admin", handleToken, adminRouter);
apiRouter.use("/product", productRouter);
