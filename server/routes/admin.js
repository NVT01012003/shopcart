import { Router } from "express";
import { findAllUser } from "../controllers/auth.js";
import { getAllProducts } from "../controllers/product.js";

export const adminRouter = Router();

adminRouter.get("/getData", async (req, res, next) => {
    try {
        const users = await findAllUser();
        const products = await getAllProducts();
        res.json({
            status: 200,
            message: "OK",
            element: {
                users,
                products,
            },
        });
    } catch (e) {
        res.status(400);
        next(e);
    }
});
